import * as PropTypes from 'prop-types';
import * as React from 'react';
import * as Yup from 'yup';
import { ImCheckmark, ImCross } from 'react-icons/im';
import { BlockedWindow } from 'app/shared/components/BlockedWindow';
import { Box } from 'app/shared/components/Box';
import { ChoosePanel } from 'app/shared/components/ChoosePanel';
import { Form } from './styles';
import { FormikHelpers } from 'formik/dist/types';
import { Note } from '../../models/Note';
import { Select } from 'app/shared/components/Select';
import { SpanError } from 'app/shared/components/SpanError';
import { useFormik } from 'formik';

interface NewNoteSingleProps {
  role: string;
  performerName: string;
  performerId: string;
  onSubmit: (newNote: Note) => void;
  closeNote: () => void;
  initialValues?: FormValues;
}

interface FormValues {
  noteType: string;
}

const validationSchema = Yup.object().shape<FormValues>({
  noteType: Yup.string().required('selecciona un tipo de nota'),
});

export const NewNoteSingle: React.FC<NewNoteSingleProps> = ({
  role,
  performerName,
  performerId,
  onSubmit,
  closeNote,
  initialValues = {
    noteType: '',
  },
}) => {
  const handleSubmit = (
    values: FormValues,
    { resetForm }: FormikHelpers<FormValues>
  ) => {
    onSubmit({
      type: values.noteType,
      performer: performerId,
      createdBy: '',
      date: new Date(),
    });
    resetForm();
    closeNote();
  };

  const formik = useFormik({
    initialValues,
    validationSchema,
    onSubmit: handleSubmit,
  });

  const handleCancelar = () => {
    closeNote();
  };

  return (
    <BlockedWindow>
      <Box>
        <h2>nueva nota</h2>
        <h3>{performerName}</h3>
        <Form onSubmit={formik.handleSubmit}>
          <Select
            name="noteType"
            placeholder="tipo de nota"
            value={formik.values.noteType}
            onChange={formik.handleChange}
          >
            <option value="" className="option">
              selecciona una opción
            </option>
            <option value="inhability" className="option">
              Incapacidad
            </option>
            <option value="late" className="option">
              Llegada tarde
            </option>
            <option value="absence" className="option">
              Falta
            </option>
            <option value="permission" className="option">
              Permiso
            </option>
            {role !== 'monitor' && (
              <option value="miss" className="option">
                Franja roja
              </option>
            )}
            {role !== 'monitor' && (
              <option value="pass" className="option">
                Franja verde
              </option>
            )}
          </Select>
          {formik.touched.noteType && formik.errors.noteType && (
            <SpanError>{formik.errors.noteType}</SpanError>
          )}
          <ChoosePanel>
            <button type="submit">
              <ImCheckmark className="icon" />
              aceptar
            </button>
            <button type="button" onClick={handleCancelar}>
              <ImCross className="icon" />
              cancelar
            </button>
          </ChoosePanel>
        </Form>
      </Box>
    </BlockedWindow>
  );
};

NewNoteSingle.propTypes = {
  role: PropTypes.string.isRequired,
  performerName: PropTypes.string.isRequired,
  performerId: PropTypes.string.isRequired,
  onSubmit: PropTypes.func.isRequired,
  closeNote: PropTypes.func.isRequired,
  initialValues: PropTypes.shape({
    noteType: PropTypes.string.isRequired,
  }),
};
