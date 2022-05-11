import * as PropTypes from 'prop-types';
import * as React from 'react';
import * as XLSX from 'xlsx';
import { Title, UploadFilesContainer} from './styles';
import { useEffect, useState } from 'react';
import { Camsoda } from '../../models/Camsoda';
import DragAndDrop from '../../components/DragAndDrop';
import { ImLive } from '../../models/ImLive';
import { Loading } from 'app/shared/components/Loading';
import { Session } from 'app/feature/Login/models/Session';
import { Streamate } from '../../models/Streamate';
const wholeFileRegex = /\r\n|\n/;
const rowRegex = /,(?![^"]*"(?:(?:[^"]*"){2})*[^"]*$)/;

interface UploadFilesManageProps {
  session: Session;
  postStreamate: (streamate: Streamate, session: Session) => any;
  postCamsoda: (camsoda: Camsoda, session: Session) => any;
  postImLive: (imLive: ImLive, session: Session) => any;
}

export const UploadFilesManage: React.FC<UploadFilesManageProps> = ({
  session,
  postStreamate,
  postCamsoda,
  postImLive,
}) => {  
  const [isLoading, setLoading] = useState(false);
  const [message, setMessage] = useState('Arrastre aquí los archivos');
  const [file, setFile]: [File[] | undefined, any] = useState(undefined);
    
  useEffect(() => {
      async function loadModelsData() {
          const fromDate = new Date();
          fromDate.toISOString();
      } 
      loadModelsData();               
  },[]);

  useEffect(() => {
    async function csvUpload(): Promise<void> {
      for (const key in file) {
        if(parseInt(key) >= 0) {
          await readCsvFile(file[parseInt(key)]);                
        }
      }
    }
    csvUpload();
  },[file]);

  const readCsvFile = async (file: File) => {
    const reader = new FileReader(); 

    reader.onload = async (evt) => {
      /* Parse data */
      const bstr = evt.target?.result;
      const wb = XLSX.read(bstr, { type: 'binary' });
      /* Get first worksheet */
      const wsname = wb.SheetNames[0];
      const ws = wb.Sheets[wsname];
      /* Convert array of arrays */
      const data = XLSX.utils.sheet_to_csv(ws);
      const cleanedData = file.name.includes('earnings') ? data.replace(/(")/g, '') : data;
      return await processData(cleanedData, file.name);
    };
    reader.readAsBinaryString(file);
    return await reader;
  };

  const handleDrop = async (file: File[]) => {
    setLoading(true);
    setFile(file);       
  };

// process CSV data
  const processData = async (dataString: string, fileName: string) => {
    let filteredLines: string[][] = [];
    const apiResponses: any[] = [];
    const dataStringLines = dataString.split(wholeFileRegex);
    const dataStringLineOne = dataStringLines?.shift();
    const headers = dataStringLineOne?.split(rowRegex) || [];
    const list = dataStringLines.reduce((accumulator: string[][], dataStringLine: string) => {
      const row = dataStringLine.split(rowRegex);
      if (row.length > 1) {                    
        accumulator.push(row);
      }
      return accumulator;
    }, []);
    if(fileName.includes('earnings')){
      if (!headers.includes('Transaction ID')) {
        window.alert('El archivo no corresponde a streamate');
      } else {
        filteredLines = list;
        for (const filteredLine of filteredLines) {
          try {
            const streamate: Streamate = {
              performerName: filteredLine[1],
              endTime: filteredLine[4],
              totalTime: filteredLine[5],
              performerEarned: filteredLine[11],
              transactionId: filteredLine[12],
            };
            const res = await postStreamate(streamate, session);
            apiResponses.push(res);
          } catch (error) {
            apiResponses.push(error);
          }
        }
      }
    } else if (fileName.includes('Studio Accounting')) {      
      if (!headers.includes('Average (tokens/hr)')) {
        window.alert('El archivo no corresponde a camsoda');
      } else {
        filteredLines = list;
        for (const filteredLine of filteredLines) {
          try {
            const endTime = new Date();
            const camsoda: Camsoda = {
              performerName: filteredLine[0],
              endTime: endTime.toISOString(),
              totalTime: filteredLine[1],
              performerEarned: filteredLine[7],
            };
            const res = await postCamsoda(camsoda, session);
            apiResponses.push(res);
          } catch (error) {
            apiResponses.push(error);
          }
        }
      }
    } else if (fileName.includes('HostReport')) {
      if (!headers.includes('Outstanding Earnings')) {
        window.alert('El archivo no corresponde a ImLive.');
      } else {
        filteredLines = list;
        for (const filteredLine of filteredLines) {
          try {
            const imLive: ImLive = {
              performerName: filteredLine[12],
              endTime: filteredLine[6],
              avgEarnings: filteredLine[10],
              performerEarned: filteredLine[9],
            };
            const res = await postImLive(imLive, session);
            apiResponses.push(res);
          } catch (error) {
            apiResponses.push(error);
          }
        }
      }
    } else if (fileName.includes('livejasmin')) {
      filteredLines = list;
    } else {
      window.alert('El archivo no corresponde a ninguna plataforma conocida.');
    }
    let repeatedCounter = 0;
    let createdCounter = 0;
    apiResponses.map( res => {
      if (res.status === 201) {
        createdCounter ++;
      } else if (res.response.status === 400) {
        repeatedCounter ++;
      }
    });
    const msg = `-> Subidas ${createdCounter} filas de ${apiResponses.length}.

      -X No subidas ${repeatedCounter} filas repetidas.`;
    setMessage(msg);
    setTimeout(() => {
      setMessage('Arrastre aquí los archivos');
    }, 5000);
    setLoading(false);
    return await apiResponses;
  };

  return (
    <UploadFilesContainer>
      { isLoading && <Loading /> }
      { !isLoading && <DragAndDrop handleDrop={handleDrop}>                
          <Title>{message}</Title>       
      </DragAndDrop> }
    </UploadFilesContainer>
  );
};

UploadFilesManage.propTypes = {
  session: PropTypes.any.isRequired,
  postStreamate: PropTypes.func.isRequired,
  postCamsoda: PropTypes.func.isRequired,
  postImLive: PropTypes.func.isRequired,
};
