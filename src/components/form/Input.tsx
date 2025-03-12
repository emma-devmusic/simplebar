import { OctagonAlert } from 'lucide-react';
import { ChangeEvent, cloneElement, useId } from 'react';

type Size = 'sm' | 'md' | 'lg'

interface CustomInputProps {
    label: string;
    type: string;
    value?: string | number;
    onChange: (
        e: ChangeEvent<
            HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
        >
    ) => void;
    name: string;
    id?: string; // Required for accessibility (aria-label, aria-labelledby)
    className?: string; // Additional CSS class for styling purposes  // Optional prop to add additional styles to the input field. Example: className="my-class"  // Optional prop to add additional styles to the input field. Example: className="my-class"  // Optional prop to add additional styles to the input field. Example: className="my-class"  // Optional prop to add additional styles to the input field. Example: className="my-class"  // Optional prop
    placeholder?: string;
    checked?: boolean; // Optional prop to make the input field a checkbox. Example: checkbox={true}  // Optional prop to make the input field a checkbox. Example: checkbox={true}  // Optional prop to make the input field a checkbox. Example: checkbox={true}  // Optional prop to make the input field a checkbox. Example: checkbox={true}  // Optional prop to make the input field a checkbox. Example: checkbox={true}  // Optional prop to make
    isFloatingLabel?: boolean; // Optional prop to make the input field a floating label;
    labelClass?: string; // Optional prop to add additional styles to the label. Example: labelClass="my-label-class"  // Optional prop to add additional styles to the input field. Example: inputClass="my-input-class"  // Optional prop to add additional styles to the input field. Example: inputClass="my-input-class"  // Optional prop to add additional styles to the input field. Example: inputClass="my-input-class"
    inputClass?: string; // Optional prop to add additional styles to the input field. Example: inputClass="my-input-class"  // Optional prop to add additional styles to the input field. Example: inputClass="my-input-class"  // Optional prop to add additional styles to the input field. Example: inputClass="my-input-class"  // Optional prop to add additional styles to the input field. Example: inputClass="my-input-class
    requiered?: boolean;
    errorMsg?: string;
    icon?: React.ReactElement;
    iconPosition?: 'left' | 'right';
    size?: Size
}

type InputProps = Omit<React.InputHTMLAttributes<HTMLInputElement>, 'size'> & CustomInputProps;

export const Input = ({
    id,
    label,
    type,
    value,
    onChange,
    name,
    className,
    placeholder,
    checked,
    isFloatingLabel = false,
    labelClass = '',
    inputClass = '',
    requiered,
    errorMsg,
    icon,
    iconPosition = 'left',
    size = 'lg',
    ...rest
}: InputProps) => {
    const generatedId = useId(); // Genera un ID único
    const inputId = id || generatedId; // Usa el ID proporcionado o el generado
    const customClass = className || ''; // Optional prop to add additional styles to the input field. Example: className="my-class"
    const isCheckbox = type === 'checkbox';
    const sizeClass:Record<Size, string> = {
        sm: 'py-2 px-2.5 text-xs',
        md: 'py-2 px-2.5 text-sm',
        lg: 'py-2.5 px-2.5 text-md'
    }
    inputClass += `${errorMsg ? '!border-red-600 focus-within:!border-white focus-within:ring-2 focus-within:!ring-primary' : ''}`;
    labelClass += `${errorMsg ? '!text-red-600' : ''}`;

    if (isFloatingLabel)
        return (
            <div className={`w-full ${customClass}`}>
                <label
                    htmlFor={inputId}
                    className={`relative block rounded-md border border-gray-200 shadow-xs transition-all focus-within:border-primary focus-within:ring-1 focus-within:ring-primary ${inputClass}`}
                >
                    <input
                        aria-label={`Cuadro de entrada para colocar ${label}`}
                        id={id}
                        type={type}
                        name={name}
                        className={`peer w-full border-none bg-transparent ${sizeClass[size]} placeholder-transparent focus:border-transparent focus:ring-0 focus:outline-hidden ${inputClass}`}
                        value={value}
                        onChange={onChange}
                        placeholder={placeholder}
                        required={requiered}
                        {...rest}
                    />
                    <span
                        className={`pointer-events-none absolute start-2.5 top-0 -translate-y-1/2 rounded-md bg-white p-0.5 px-1 text-xs text-gray-700 transition-all peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-sm peer-focus:top-0 peer-focus:text-xs ${labelClass}`}
                    >
                        {label}
                    </span>
                </label>
                {errorMsg && (
                    <div className="m-0 mt-1 flex items-center gap-1 p-0 text-[13px] text-red-600">
                        <OctagonAlert className="h-3.5 w-3.5 min-w-3.5 self-baseline" />
                        <p className="[line-height:14px]">{errorMsg}</p>
                    </div>
                )}
            </div>
        );

    return (
        <div
            className={`flex w-full gap-1 ${isCheckbox ? 'flex-row-reverse items-center justify-end !gap-2.5 [&_input]:focus:outline-transparent' : 'flex-col'} ${customClass}`}
        >
            {label && (
                <label
                    htmlFor={inputId}
                    className={`block text-sm ${isCheckbox ? 'hover:cursor-pointer hover:underline' : 'font-medium text-gray-700'} ${labelClass}`}
                >
                    {label}
                </label>
            )}
            <div className="relative">
                <input
                    id={id}
                    aria-label={`Cuadro de entrada para colocar ${label}`}
                    type={type}
                    name={name}
                    className={`${sizeClass[size]}  ${!isCheckbox ? 'w-full' : 'hover:cursor-pointer'} rounded-md border-1 border-gray-200 bg-white text-sm text-gray-700 shadow-sm transition-all focus:outline-2 focus:outline-primary ${inputClass} ${!icon ? '' : iconPosition === 'left' ? 'pl-10' : 'pr-10'}`}
                    value={value}
                    onChange={onChange}
                    placeholder={placeholder}
                    checked={checked}
                    required={requiered}
                    {...rest}
                />
                <div
                    className={`absolute top-2.5 ${iconPosition === 'left' ? 'left-2.5' : 'right-2.5'}`}
                >
                    {icon &&
                        type !== 'checkbox' &&
                        cloneElement(icon, {
                            className: `h-5 text-gray-400 ${icon.props.className || ''} `,
                        })}
                </div>
            </div>
            {errorMsg && (
                <div className="m-0 mt-1 flex items-center gap-1 p-0 text-[13px] text-red-600">
                    <OctagonAlert className="h-3.5 w-3.5 min-w-3.5 self-baseline" />
                    <p className="[line-height:14px]">{errorMsg}</p>
                </div>
            )}
        </div>
    );
};
