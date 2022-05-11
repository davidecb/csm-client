import { FaFileInvoiceDollar, FaFileUpload } from 'react-icons/fa';
import { HiHome, HiOutlineLogout } from 'react-icons/hi';
import { IoDocumentText, IoSettingsOutline } from 'react-icons/io5';
import { GoGraph } from 'react-icons/go';
import { MdEventNote } from 'react-icons/md';

const navOptions = [  
    {
        role: 'CEO monitor manager financial admin',
        name: 'Inicio',
        Icon: HiHome,
        urlPath: '/',
        onClick: false,
    },  
    {
        role: 'CEO admin manager',
        name: 'Cargar Datos',
        Icon: FaFileUpload,
        urlPath: '/upload-files',
        onClick: false,
    },    
    {
        role: 'CEO monitor manager financial admin',
        name: 'Gestión',
        Icon: GoGraph,
        urlPath: '/management',
        onClick: false,
    },
    {
        role: 'CEO manager financial admin',
        name: 'Notas',
        Icon: MdEventNote,
        urlPath: '/notes',
        onClick: false,
    },
    {
        role: 'admin',
        name: 'Mantenimiento',
        Icon: IoSettingsOutline,
        urlPath: '/maintenance',
        onClick: false,
    },
    {
        role: 'admin',
        name: 'Reportes',
        Icon: IoDocumentText,
        urlPath: '/reports/goals',
        onClick: false,
    },
    {
        role: 'admin',
        name: 'Financiero',
        Icon: FaFileInvoiceDollar,
        urlPath: '/financial',
        onClick: false,
    },
    {
        role: 'CEO monitor manager financial admin maintenance',
        name: 'Salir',
        Icon: HiOutlineLogout,
        urlPath: '/',
        onClick: true,
    }
];

export default navOptions;
