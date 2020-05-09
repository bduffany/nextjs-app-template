import { faLightbulb } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useState, useContext, useEffect } from 'react';
import styled, { keyframes } from 'styled-components';

interface DarkMode {
  isEnabled: boolean;
  setEnabled: (value: boolean) => void;
}

export const DarkModeContext = React.createContext<DarkMode>(null);

type ToggleProps = { dark: boolean };

const pop = keyframes`
  0% {
    transform: scale(1);
    filter: brightness(100%);
  }
  50% {
    transform: scale(1.1);
    filter: brightness(150%);
  }
  100% {
    transform: scale(1);
    filter: brightness(100%);
  }
`;

const Toggle = styled.button<ToggleProps>`
  cursor: pointer;
  height: 40px;
  width: 40px;
  outline: none;
  border: none;
  background: transparent;
  padding: 0;
  border-radius: 50%;

  & > div {
    height: 100%;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;

    background: ${(p) => (p.dark ? 'black' : 'white')};
    border-radius: 50%;
    box-shadow: 0 1px 2px rgba(0, 0, 0, 0.27),
      inset 0 1px 1px rgba(255, 255, 255, 0.4);

    transition: transform 50ms ease-out, box-shadow 100ms ease-out;

    animation: 175ms ease-out ${pop};
  }

  &:active > div {
    transform: scale(0.9);
    box-shadow: inset 0 1px 2px rgba(0, 0, 0, 0.27),
      inset 0 -1px rgba(255, 255, 255, 0.27);
    animation: none;
    filter: brightness(90%);
  }
`;

export default function DarkModeToggle({ style }: any) {
  const darkMode = useContext(DarkModeContext);

  useEffect(() => {
    if (darkMode.isEnabled) {
      document.body.classList.add('dark');
    } else {
      document.body.classList.remove('dark');
    }
  }, [darkMode.isEnabled]);

  return (
    <Toggle
      role="switch"
      aria-checked={darkMode?.isEnabled}
      onClick={() => darkMode.setEnabled(!darkMode.isEnabled)}
      dark={darkMode?.isEnabled}
      style={style}
    >
      <div>
        <FontAwesomeIcon
          icon={faLightbulb}
          style={{
            fontSize: '24px',
            color: darkMode?.isEnabled ? 'var(--primary-color)' : 'black',
          }}
        />
      </div>
    </Toggle>
  );
}

export function DarkModeContextProvider({ children }: any) {
  const [isEnabled, setEnabled] = useState(false);

  return (
    <DarkModeContext.Provider value={{ isEnabled, setEnabled }}>
      {children}
    </DarkModeContext.Provider>
  );
}
