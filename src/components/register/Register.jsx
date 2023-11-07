import React, { useState } from 'react';
import Styles from './Register.module.css';
import calendario from '../../assets/calendar.svg'
import drop from '../../assets/dropdown.svg'
import back from '../../assets/back.svg'

export const Register = () => {
  return (

    <form className={Styles.datos}>

      <div className={Styles.screenName}>
        <img src={back} alt="back" className={Styles.back}/>
        <h1>Registro de becas</h1>
      </div>

      <div className={Styles.datosPersonales}>
        
        <div className={Styles.columna}>
          <label>
            Expediente<br/>
            <input type="number" name="nombres"/>
          </label>
        </div>

        <div className={Styles.columna}>
          <label>
            Nombres<br/>
            <input type="text" name="nombres"/>
          </label>
        </div>

        <div className={Styles.columna}>
          <label>
            Apellidos<br/>
            <input type="text" name="apellidos"/>
          </label>
        </div>
      </div>

      <div className={Styles.datosPersonalesDos}>

        <div className={Styles.columna}>
          <label>
            Correo<br/>
            <input type="text" name="correo"/>
          </label>
        </div>

        <div className={Styles.columna}>
          <label>
            Telefono<br/>
            <input type="number" name="telefono"/>
          </label>
        </div>

      </div>

      <div className={Styles.datosPersonales}>
        
        <div className={Styles.columna}>
          
          <label>
            Licenciatura<br/>
            <select name="licenciatura">
              <option disabled selected value="">Selecciona una opción</option>
              <option value="licInfo">Licenciatura en Informática</option>
              <option value="lati">Licenciatura en Administración de las T.I.</option>
              <option value="ingSoft">Ingeniería de Software</option>
              <option value="ingCompu">Ingeniería en Computación</option>
              <option value="ingTele">Ingeniería en Telecomunicaciones y Redes</option>
              <option value="ingCiencia">Ingeniería en Ciencia y Analítica de Datos</option>
              <option value="ingCiberseguridad">Ingeniería en Tecnologías de Información y Ciberseguridad</option>
            </select>
          </label>

          <label>
            Tipo de Apoyo<br/>
            <select name="tipoApoyo">
              <option disabled selected value="">Selecciona una opción</option>
              <option value="1">Beca</option>
              <option value="2">Pago Inscripcion</option>
              <option value="3">Pago Taller</option>
              <option value="4">Transporte</option>
              <option value="5">Alimentos</option>
            </select>
          </label>
        </div>

        <div className={Styles.columna}>
          <label>
            Plan de Estudios<br/>
            <input type="text" name="nombres"/>
          </label>
          <label>
            Monto<br/>
            <input type="number" name="monto"/>
          </label>
        </div>

        <div className={Styles.columna}>
          
        <label>
            Semestre<br/>
            <select name="semestre">
              <option disabled selected value="">Selecciona una opción</option>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
              <option value="6">6</option>
              <option value="7">7</option>
              <option value="8">8</option>
              <option value="9">9</option>
              <option value="10">10</option>
              <option value="11">11</option>
              <option value="12">12</option>
              <option egresado="Egresado">12</option>
            </select>
          </label>
          <label>
            Periodo<br/>
          </label>

        </div>
      </div>

      <div className={Styles.upload}>
        
        <p>Identificación</p><br/>
        <input type='file' accept="document/pdf"/><br/>
        <p>Comprobante</p><br/>
        <input type='file' accept="document/pdf"/><br/>
        <p>Solicitud</p><br/>
        <input type='file' accept="document/pdf"/><br/>

      </div>
      
      <label>
            Observaciones<br/>
            <input type="text" name="observations"/>
      </label>

      <input className={Styles.observations} type="submit" value="Guardar Empleado"/>
     
    </form>
  )
}