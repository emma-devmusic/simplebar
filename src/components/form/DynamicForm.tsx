import { FormEvent, useCallback, useEffect, useMemo, useState } from "react"
import { useForm } from "../../hooks/useForm"
import { formValidate, OBJECT_LABELS_FIELDS, OBJECT_PLACEHOLDERS_FIELDS } from "../../common/helpers"
import { FiledsForm, FormsInputs, ObjectErrorsMessages } from "../../types/form"
import { Input } from "./Input"
import { Button, ButtonProps } from "../buttons/Button"

interface DynamicFormProps {
  values: FormsInputs;
  shouldShowErrors?: boolean;
  requiredFields?: FiledsForm[],
  updateActions?: React.Dispatch<React.SetStateAction<ButtonProps[]>>;
  actionSaveData: (values: FormsInputs) => void;
  showSubmit?: boolean;
  floatingLabels?: boolean;
}

export const DynamicForm = ({ values, shouldShowErrors, requiredFields, updateActions, actionSaveData, showSubmit = true, floatingLabels = false }: DynamicFormProps) => {

  /**
   * =========================================================================================================================
   * WORK IN PROGRESS | 'DynamicForm' IS NOT FINISHED
   * =========================================================================================================================
   */

  const [flag, setFlag] = useState(shouldShowErrors)
  const [errorMsg, setErrorMsg] = useState({} as ObjectErrorsMessages)
  const [value, handleInputChange] = useForm({ ...values } as FormsInputs)

  const memoizedRequiredFields = useMemo(() => requiredFields, [requiredFields]);

  useEffect(() => {
    const msgs = formValidate(value as FormsInputs, memoizedRequiredFields)
    setErrorMsg(msgs)
  }, [value])

  useEffect(() => {
    if (updateActions) updateActions([
      {
        action: handleSave,
        label: 'Guardar',
        type: 'submit',
        disabled: flag && errorMsg.hasErrors,
      },
    ])
  }, [flag, errorMsg])

  const handleSave = useCallback((e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setFlag(true);
    if (!errorMsg.hasErrors) {
      actionSaveData(value)
    }
  }, [errorMsg, value]);

  return (
    <form onSubmit={handleSave}>
      <div className="flex flex-col gap-4">
        {
          Object.entries(value).map(([key, value]) => {
            return <Input
              key={key}
              label={OBJECT_LABELS_FIELDS[key as FiledsForm]}
              name={key}
              type={key === 'password' || key === 'password2' ? 'password' : 'text'}
              onChange={handleInputChange}
              value={value[key]}
              placeholder={OBJECT_PLACEHOLDERS_FIELDS[key as FiledsForm]}
              errorMsg={flag ? errorMsg[key as FiledsForm] : ''}
              isFloatingLabel={floatingLabels}
            />
          })
        }
        {
          showSubmit &&
          <Button
            action={handleSave}
            label="Guardar"
            type="submit"
            disabled={flag && errorMsg.hasErrors}
          />
        }
      </div>
    </form>
  )
}
