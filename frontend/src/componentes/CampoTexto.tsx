import React, { ChangeEvent } from 'react'
import "../estilos/campotexto.css";

//* A propriedade pwd serve para definir se o campo receberá uma senha ou um texto normal
interface Props {
  name: string;
  label: string;
  value?: any;
  pwd?: boolean;
  required?: boolean;
  changeFunc?: any;
}

export default function CampoTexto({ name, label, pwd=false, value, changeFunc, required=false }: Props) {

  return (
    <>
      <div className="label-campo">
        <input
          type={pwd ? "password" : "text"}
          name={name}
          id={name}
          value={value}
          required={required}
          onChange={changeFunc}
        />
        <label>{label}</label>
      </div>
    </>
  );
}
