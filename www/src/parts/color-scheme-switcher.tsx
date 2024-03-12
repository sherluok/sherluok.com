'use client';

import { faAdjust, faMoon, faSun } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { ColorSchemeCookieValue } from '^/lib/common/color-scheme';
import { useTransition } from 'react';
import { setColorScheme } from './color-scheme-actions';
import * as s from './color-scheme-switcher.css';

interface ColorSchemeSwitcherProps {
  value: ColorSchemeCookieValue;
}

export function ColorSchemeSwitcher(props: ColorSchemeSwitcherProps) {
  const [pending, startTransition] = useTransition();

  const onClick = (value: ColorSchemeCookieValue) => {
    if (!pending) {
      startTransition(() => {
        setColorScheme(value);
      });
    }
  };

  return (
    <div className={s.schemeSwitcher}>
      <ColorSchemeSwitchButton onClick={onClick} value={ColorSchemeCookieValue.SysmtemPrefers} active={ColorSchemeCookieValue.SysmtemPrefers === props.value} tooltip="System" />
      <ColorSchemeSwitchButton onClick={onClick} value={ColorSchemeCookieValue.UserPrefersLight} active={ColorSchemeCookieValue.UserPrefersLight === props.value} tooltip="Light" />
      <ColorSchemeSwitchButton onClick={onClick} value={ColorSchemeCookieValue.UserPrefersDark} active={ColorSchemeCookieValue.UserPrefersDark === props.value} tooltip="Dark" />
    </div>
  );
}

interface ColorSchemeSwitchButtonProps {
  tooltip: string;
  active: boolean;
  value: ColorSchemeCookieValue;
  onClick: (value: ColorSchemeCookieValue) => void;
}

const ICON_MAP = {
  [ColorSchemeCookieValue.SysmtemPrefers]: faAdjust,
  [ColorSchemeCookieValue.UserPrefersLight]: faSun,
  [ColorSchemeCookieValue.UserPrefersDark]: faMoon,
};

function ColorSchemeSwitchButton(props: ColorSchemeSwitchButtonProps) {
  const className = props.active ? s.schemeButton.active : s.schemeButton.inactive;
  const onClick = () => !props.active && props.onClick(props.value);
  const icon = ICON_MAP[props.value];

  return (
    <div {...{ className, onClick }} title={props.tooltip}>
      <FontAwesomeIcon className={s.schemeIcon} icon={icon} />
    </div>
  );
}
