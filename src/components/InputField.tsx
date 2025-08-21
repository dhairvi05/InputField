import React from 'react'
import './InputField.css'

export interface Props {
    value?: string;
    onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
    label?: string;
    placeholder?: string;
    helperText?: string;
    errorMessage?: string;
    disabled?: boolean;
    invalid?: boolean;
    loading?: boolean;
    variant?: 'filled' | 'outlined' | 'ghost';
    size?: 'sm' | 'md' | 'lg';
}

const InputField: React.FC<Props> = ({
    value,
    onChange,
    label,
    placeholder,
    helperText,
    errorMessage,
    disabled = false,
    invalid = false,
    loading = false,
    variant = 'outlined',
    size = 'md',
}) => {
    return (
        <div className="input">
            {label && <label className="input-label">{label}</label>}
            <div className="input-wrapper">
                <input
                  value={value}
                  onChange={onChange}
                  placeholder={loading ? "Loading..." : placeholder}
                  disabled={disabled || loading}
                  className={[
                    "input-box",
                    `input-${size}`,
                    `input-${variant}`,
                    invalid ? "input-invalid" : "",
                    (disabled || loading) ? "input-disabled" : "",
                  ].join(" ")}
                />
                {loading && <span className="spinner"></span>}
            </div>
            {invalid && errorMessage ? (
                <span className="error-text">{errorMessage}</span>
            ) : helperText ? (
                <span className="helper-text">{helperText}</span>
            ) : null}
        </div>
    );
};

export default InputField
