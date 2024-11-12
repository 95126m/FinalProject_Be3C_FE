import { useState } from 'react';
import { css } from '@emotion/react';
import { SvgIconComponent } from '@mui/icons-material';
import SvgIcon from '@mui/icons-material/CancelOutlined';

type InputTypes = 'text' | 'password' | 'email' | 'tel';

interface InputProps {
  type?: InputTypes;
  placeholder?: string;
  color?: string;
  firstIcon?: SvgIconComponent;
  secondIcon?: SvgIconComponent;
}

const Input: React.FC<InputProps> = ({
  type,
  placeholder,
  color,
  firstIcon,
  secondIcon,
}) => {
  const [input, setInput] = useState('');

  return (
    <div css={inputWrapperStyle(color)}>
      <input
        css={inputStyle}
        type={type}
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder={placeholder}
      />
      {firstIcon && <SvgIcon css={iconStyle} />}
      {secondIcon && <SvgIcon css={iconStyle} />}
    </div>
  );
};

const inputWrapperStyle = (color: string | undefined) => css`
  display: flex;
  width: 100%;
  border: 1px solid ${color ? color : 'rgba(0, 0, 0, 0.1)'};
  border-radius: 4px;
`;

const inputStyle = css`
  width: 100%;
  height: 48px;
  border: none;
  outline: none;
  border-radius: 4px;
  padding: 16px 0 16px 16px;

  font-size: 16px;
  font-weight: 400;
  letter-spacing: -0.32px;

  &::placeholder {
    color: rgba(0, 0, 0, 0.3);
  }
`;

const iconStyle = css`
  width: 48px;
  height: 48px;
  padding: 12px;
  color: #1c1b1f;
  cursor: pointer;
`;

export default Input;
