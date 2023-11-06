import React, { useState } from 'react';
import Styles from './InfoCard.module.css';
import calendario from '../../assets/calendar.svg'
import drop from '../../assets/dropdown.svg'
import municipiosPorEstado from './municipios'; 

export const InfoCard = () => {

  const [selectedState, setSelectedState] = useState('');
  const [selectedMunicipality, setSelectedMunicipality] = useState('');

  const handleStateChange = (event) => {
    const newState = event.target.value;
    setSelectedState(newState);
    setSelectedMunicipality('');
  };

  const [selectedDependency, setSelectedDependency] = useState('');
  const [selectedPlantel, setSelectedPlantel] = useState('');

  const handleDependencyChange = (event) => {
    const newDependency = event.target.value;
    setSelectedDependency(newDependency);
    setSelectedPlantel('');
  };
  
  const plantelesPorDependencia = {
    COBAQ: ["Municipio1", "Municipio2", "Municipio3"],
    CECYTEQ: ["Municipio4", "Municipio5", "Municipio6"],
  };

  return (
    <div className={Styles.datosEmpleado}>
      
      <h1 className={Styles.title}>Datos Personales</h1>

      <form className={Styles.datosPersonales}>
        <box className={Styles.columna}>
          <label>
            Nombre <br/>
            <input type="text" name="nombre"/>
          </label>

          <label>
            Fecha de Nacimiento <br/>
            <input 
              type="date" 
              name="fechaNacimiento"
            />
          </label>

          <text>Nacionalidad</text>
          <label className={Styles.checks}>
            <input type='radio' name="nacionalidad" value="mexicana"/> 
            <p>Mexicana</p>
            <input type='radio' name="nacionalidad" value="extranjera"/>
            <p>Extranjera</p>
          </label>

          <label>
            NSS <br/>
            <input type="text" name="nss"/>
          </label>

        </box>

        <box className={Styles.columna}>
          <label>
            Apellido Paterno<br/>
            <input type="text" name="apellidoP"/>
          </label>
          
          <label>
            Lugar de Nacimiento<br/>
            <select placeholder="Buscar" name="lugarNacimiento">
              <option disabled selected value="">Selecciona una opción</option>
              <option value="aguascalientes">Aguascalientes</option>
              <option value="bajacalifornia">Baja California</option>
              <option value="bajasur">Baja California Sur</option>
              <option value="campeche">Campeche</option>
              <option value="chiapas">Chiapas</option>
              <option value="chihuahua">Chihuahua</option>
              <option value="coahuila">Coahuila de Zaragoza</option>
              <option value="colima">Colima</option>
              <option value="cdmx">CDMX</option>
              <option value="durango">Durango</option>
              <option value="edomex">Estado de México</option>
              <option value="guanajuato">Guanajuato</option>
              <option value="guerrero">Guerrero</option>
              <option value="hidalgo">Hidalgo</option>
              <option value="jalisco">Jalisco</option>
              <option value="michoacan">Michoacán</option>
              <option value="morelos">Morelos</option>
              <option value="nayarit">Nayarit</option>
              <option value="nuevoleon">Nuevo León</option>
              <option value="oaxaca">Oaxaca</option>
              <option value="puebla">Puebla</option>
              <option value="queretaro">Querétaro</option>
              <option value="quintanaroo">Quintana Roo</option>
              <option value="sanluis">San Luis Potosí</option>
              <option value="sinaloa">Sinaloa</option>
              <option value="sonora">Sonora</option>
              <option value="tabasco">Tabasco</option>
              <option value="tamaulipas">Tamaulipas</option>
              <option value="tlaxcala">Tlaxcala</option>
              <option value="veracruz">Veracruz</option>
              <option value="yucatan">Yucatán</option>                
              <option value="zacatecas">Zacatecas</option>
            </select>
          </label>
        
          <label>
            CURP <br/>
            <input type="text" name="curp"/>
          </label>

          <label>
            Escolaridad<br/>
            <select name="escolaridad">
              <option disabled selected value="">Selecciona una opción</option>
              <option value="primaria">Primaria</option>
              <option value="secundaria">Secundaria</option>
              <option value="preparatoria">Preparatoria</option>
              <option value="carreraTecnica">Carrera Tecnica</option>
              <option value="tsu">Técnico Superior Universitario</option>
              <option value="licenciatura">Licenciatura</option>
              <option value="maestria">Maestria</option>
              <option value="doctorado">Doctorado</option>
            </select>
          </label>

        </box>

        <box className={Styles.columna}>
          
          <label>
            Apellido Materno<br/>
              <input type="text" name="apellidoM"/>
          </label>
          
          <text>Genero</text>
          <label className={Styles.checks}>
            <input type='radio' name="genero" value="masculino"/> 
            <p>Masculino</p>
            <input type='radio' name="genero" value="femenino"/>
            <p>Femenino</p>
          </label>

          <label>
            RFC <br/>
            <input type="text" name="curp"/>
          </label>

          <label>
            Estado Civil<br/>
            <select name="estadodoCivil">
              <option disabled selected value="">Selecciona una opción</option>
              <option value="soltero">Soltero</option>
              <option value="casado">Casado</option>
              <option value="divorciado">Divorciado</option>
              <option value="viudo">Viudo</option>
            </select>
          </label>
        </box>
      </form>

      <div className={Styles.uploadFoto}>
        <text>Foto del Empleado</text>
        <input type='file' accept="image/png, image/jpeg, image/jpg"/>
      </div>

      <h1 className={Styles.title}>Contacto</h1>
      <form className={Styles.datosPersonales}>
        <box className={Styles.columna}>
          <label>
            Calle <br/>
            <input type="text" name="calle"/>
          </label>

          <label>
            Colonia <br/>
            <input type="text" name="colonia"/>
          </label>

          <label>
            Teléfono <br/>
            <input type="tel" name="telefono"/>
          </label>
        </box>

        <box className={Styles.columna}>
          <label>
            Apellido Paterno<br/>
            <input type="text" name="apellidoP"/>
          </label>
          
          <label>
            Estado<br/>
            <select name="estado" value={selectedState} onChange={handleStateChange}>
              <option disabled selected value="">Selecciona una opción</option>
              <option value="aguascalientes">Aguascalientes</option>
              <option value="bajacalifornia">Baja California</option>
              <option value="bajasur">Baja California Sur</option>
              <option value="campeche">Campeche</option>
              <option value="chiapas">Chiapas</option>
              <option value="chihuahua">Chihuahua</option>
              <option value="coahuila">Coahuila de Zaragoza</option>
              <option value="colima">Colima</option>
              <option value="cdmx">CDMX</option>
              <option value="durango">Durango</option>
              <option value="edomex">Estado de México</option>
              <option value="guanajuato">Guanajuato</option>
              <option value="guerrero">Guerrero</option>
              <option value="hidalgo">Hidalgo</option>
              <option value="jalisco">Jalisco</option>
              <option value="michoacan">Michoacán</option>
              <option value="morelos">Morelos</option>
              <option value="nayarit">Nayarit</option>
              <option value="nuevoleon">Nuevo León</option>
              <option value="oaxaca">Oaxaca</option>
              <option value="puebla">Puebla</option>
              <option value="queretaro">Querétaro</option>
              <option value="quintanaroo">Quintana Roo</option>
              <option value="sanluis">San Luis Potosí</option>
              <option value="sinaloa">Sinaloa</option>
              <option value="sonora">Sonora</option>
              <option value="tabasco">Tabasco</option>
              <option value="tamaulipas">Tamaulipas</option>
              <option value="tlaxcala">Tlaxcala</option>
              <option value="veracruz">Veracruz</option>
              <option value="yucatan">Yucatán</option>                
              <option value="zacatecas">Zacatecas</option>
            </select>
          </label>
        
          <label>
            Celular <br/>
            <input type="tel" name="celular"/>
          </label>
        </box>

        <box className={Styles.columna}>
          <label>
            Codigo Postal<br/>
              <input type="number" name="codigoPostal"/>
          </label>
          
          <label>
            Municipio <br/>
            <select name="municipio" value={selectedMunicipality} onChange={(event) => setSelectedMunicipality(event.target.value)}>
            <option disabled selected value="">Selecciona una opción</option>
            
            {municipiosPorEstado[selectedState]?.map((municipio, index) => (
              <option key={index} value={municipio}>{municipio}</option>
            ))}
          </select>

          </label>

          <label>
            Correo<br/>
              <input type="email" name="mail"/>
          </label>
        </box>
      </form>

      <h1 className={Styles.title}>Información del Empleo</h1>
      <form className={Styles.datosPersonales}>
        <box className={Styles.columna}>
          
          <label>
            Tipo de Dependencia<br/>
            <select name="tipoDependencia">
              <option disabled selected value="">Selecciona una opción</option>
              <option value="descentralizada">Descentralizada</option>
              <option value="poderEjecutivo">Poder Ejecutivo</option>
              <option value="poderJudicial">Poder Judicial</option>
              <option value="poderLegislativo">Poder Legislativo</option>
            </select>
          </label>

         

          <text>Nacionalidad</text>
          <label className={Styles.checks}>
            <input type='radio' name="nacionalidad" value="mexicana"/> 
            <p>Mexicana</p>
            <input type='radio' name="nacionalidad" value="extranjera"/>
            <p>Extranjera</p>
          </label>

          <label>
            NSS <br/>
            <input type="text" name="nss"/>
          </label>
        </box>
        <box className={Styles.columna}>
          <label className={Styles.dependencia}>
            Dependencia<br/>
            <select name="dependencia" value={selectedDependency} onChange={handleDependencyChange}>
              <option disabled selected value="">Selecciona una opción</option>
              <option value="0">No Aplica</option>
              <option value="1">CEA</option>
              <option value="2">CEI</option>
              <option value="3">CENTRO DE CAPACITACION FORMACION E INVESTIGACION PARA LA SEGURIDAD DEL ESTADO DE QUERETARO</option>
              <option value="COBAQ">COBAQ</option>
              <option value="5">COLEGIO DE ESTUDIOS CIENTIFICOS Y TECNOLOGICOS DEL ESTADO</option>
              <option value="6">COMISION ESTATAL DEL SISTEMA PENITENCIARIO DE QUERETARO</option>
              <option value="7">CONALEP</option>
              <option value="8">DIRECCIÓN DE DESARROLLO INTEGRAL DE LA FAMILIA</option>
              <option value="9">DIRECCIÓN DEL REGISTRO PUBLICO DE LA PROPIEDAD</option>
              <option value="10">FISCALIA GENERAL DEL ESTADO</option>
              <option value="11">INSTITUTO DE CAPACITACION PARA EL TRABAJO DEL ESTADO DE QUERETARO</option>
              <option value="12">INSTITUTO DEL DEPORTE Y LA RECREACION DEL ESTADO DE QUERETARO</option>
              <option value="13">INSTITUTO QUERETANO DE LA MUJER</option>
              <option value="14">INSTITUTO QUERETANO DEL TRANSPORTE</option>
              <option value="15">JAPAM</option>
              <option value="16">TRIBUNAL DE CONCILIACION Y ARBITRAJE</option>
              <option value="17">TRIBUNAL DE JUSTICIA ADMINISTRATIVA DEL ESTADO DE QUERETARO</option>
              <option value="18">UTEQ</option>
              <option value="19">UTSJR</option>
              <option value="20">CASA QUERETANA DE LAS ARTESANÃAS</option>
              <option value="21">COLEGIO DE ESTUDIOS CIENTIFICOS Y TECNOLOGICOS DEL ESTADO
</option>
              <option value="22">COORDINACION DE COMUNICACIÓN SOCIAL
</option>
              <option value="23">DIRECCIÓN DE DESARROLLO INTEGRAL DE LA FAMILIA</option>
              <option value="24">DIRECCIÓN DEL REGISTRO PUBLICO DE LA PROPIEDAD</option>
              <option value="25">DIRECCIÓN GENERAL DEL REGISTRO CIVIL</option>
              <option value="26">ESCUELA NORMAL DEL ESTADO</option>
              <option value="27">ESCUELA NORMAL SUPERIOR DE QUERETARO</option>
              <option value="28">INSTITUTO DE CAPACITACION PARA EL TRABAJO DEL ESTADO DE QUERETARO</option>
              <option value="29">INSTITUTO DEL DEPORTE Y LA RECREACION DEL ESTADO DE QUERETARO</option>
              <option value="30">INSTITUTO QUERETANO DE LA CULTURA Y LAS ARTES</option>
              <option value="31">OFICIALÍA MAYOR</option>
              <option value="32">PROCURADURIA GENERAL DE JUSTICIA</option>
              <option value="33">SECRETARÍA DE CULTURA</option>
              <option value="34">SECRETARÍA DE DESARROLLO AGROPECUARIO</option>
              <option value="35">SECRETARÍA DE DESARROLLO SUSTENTABLE</option>
              <option value="36">SECRETARÍA DE DESARROLLO URBANO Y OBRAS PÚBLICAS</option>
              <option value="37">SECRETARÍA DE EDUCACIÓN</option>
              <option value="38">SECRETARÍA DE GOBIERNO</option>
              <option value="39">SECRETARÍA DE LA CONTRALORÍA</option>
              <option value="40">SECRETARÍA DE LA JUVENTUD</option>
              <option value="41">SECRETARÍA DE PLANEACIÓN Y FINANZAS</option>
              <option value="42">SECRETARÍA DE SALUD</option>
              <option value="43">SECRETARÍA DE SEGURIDAD CIUDADANA</option>
              <option value="44">SECRETARÍA DE TURISMO</option>
              <option value="45">SECRETARÍA DEL TRABAJO</option>
              <option value="46">SECRETARÍA DEL TRANSPORTE</option>
              <option value="47">SISTEMA ESTATAL DE COMUNICACION CULTURAL Y EDUCATIVA</option>
              <option value="48">CASA QUERETANA DE LAS ARTESANÍAS</option>
              <option value="49">COLEGIO DE ESTUDIOS CIENTIFICOS Y TECNOLOGICOS DEL ESTADO</option>
              <option value="50">COORDINACION DE COMUNICACIÓN SOCIAL</option>
              <option value="51">DIRECCIÓN DE DESARROLLO INTEGRAL DE LA FAMILIA</option>
              <option value="52">DIRECCIÓN DEL REGISTRO PUBLICO DE LA PROPIEDAD</option>
              <option value="53">DIRECCIÓN GENERAL DEL REGISTRO CIVIL</option>
              <option value="54">ESCUELA NORMAL DEL ESTADO</option>
              <option value="55">ESCUELA NORMAL SUPERIOR DE QUERETARO</option>
              <option value="56">INSTITUTO DE CAPACITACION PARA EL TRABAJO DEL ESTADO DE QUERETARO</option>
              <option value="57">INSTITUTO DEL DEPORTE Y LA RECREACION DEL ESTADO DE QUERETARO</option>
              <option value="58">INSTITUTO QUERETANO DE LA CULTURA Y LAS ARTES</option>
              <option value="59">OFICIALÍA MAYOR</option>
              <option value="60">PROCURADURIA GENERAL DE JUSTICIA</option>
              <option value="61">SECRETARÍA DE CULTURA</option>
              <option value="62">SECRETARÍA DE DESARROLLO AGROPECUARIO</option>
              <option value="63">SECRETARÍA DE DESARROLLO SUSTENTABLE</option>
              <option value="64">SECRETARÍA DE DESARROLLO URBANO Y OBRAS PÚBLICAS</option>
              <option value="65">SECRETARÍA DE EDUCACIÓN</option>
              <option value="66">SECRETARÍA DE GOBIERNO</option>
              <option value="67">SECRETARÍA DE LA CONTRALORÍA</option>
              <option value="68">SECRETARÍA DE LA JUVENTUD</option>
              <option value="69">SECRETARÍA DE PLANEACIÓN Y FINANZAS</option>
              <option value="70">SECRETARÍA DE SALUD</option>
              <option value="71">SECRETARÍA DE SEGURIDAD CIUDADANA</option>
              <option value="72">SECRETARÍA DE TURISMO</option>
              <option value="73">SECRETARÍA DEL TRABAJO</option>
              <option value="74">SECRETARÍA DEL TRANSPORTE</option>
              <option value="75">SISTEMA ESTATAL DE COMUNICACION CULTURAL Y EDUCATIVA</option>
            </select>
          </label>
          
          <label>
            Lugar de Nacimiento<br/>
            <select placeholder="Buscar" name="lugarNacimiento">
              <option disabled selected value="">Selecciona una opción</option>
              <option value="aguascalientes">Aguascalientes</option>
              <option value="bajacalifornia">Baja California</option>
              <option value="bajasur">Baja California Sur</option>
              <option value="campeche">Campeche</option>
              <option value="chiapas">Chiapas</option>
              <option value="chihuahua">Chihuahua</option>
              <option value="coahuila">Coahuila de Zaragoza</option>
              <option value="colima">Colima</option>
              <option value="cdmx">CDMX</option>
              <option value="durango">Durango</option>
              <option value="edomex">Estado de México</option>
              <option value="guanajuato">Guanajuato</option>
              <option value="guerrero">Guerrero</option>
              <option value="hidalgo">Hidalgo</option>
              <option value="jalisco">Jalisco</option>
              <option value="michoacan">Michoacán</option>
              <option value="morelos">Morelos</option>
              <option value="nayarit">Nayarit</option>
              <option value="nuevoleon">Nuevo León</option>
              <option value="oaxaca">Oaxaca</option>
              <option value="puebla">Puebla</option>
              <option value="queretaro">Querétaro</option>
              <option value="quintanaroo">Quintana Roo</option>
              <option value="sanluis">San Luis Potosí</option>
              <option value="sinaloa">Sinaloa</option>
              <option value="sonora">Sonora</option>
              <option value="tabasco">Tabasco</option>
              <option value="tamaulipas">Tamaulipas</option>
              <option value="tlaxcala">Tlaxcala</option>
              <option value="veracruz">Veracruz</option>
              <option value="yucatan">Yucatán</option>                
              <option value="zacatecas">Zacatecas</option>
            </select>
          </label>
        
          <label>
            CURP <br/>
            <input type="text" name="curp"/>
          </label>

          <label>
            Escolaridad<br/>
            <select name="escolaridad">
              <option disabled selected value="">Selecciona una opción</option>
              <option value="primaria">Primaria</option>
              <option value="secundaria">Secundaria</option>
              <option value="preparatoria">Preparatoria</option>
              <option value="carreraTecnica">Carrera Tecnica</option>
              <option value="tsu">Técnico Superior Universitario</option>
              <option value="licenciatura">Licenciatura</option>
              <option value="maestria">Maestria</option>
              <option value="doctorado">Doctorado</option>
            </select>
          </label>

        </box>

        <box className={Styles.columna}>

          <label>
            Plantel <br/>
            <select name="plantel" value={selectedPlantel} onChange={(event) => setSelectedPlantel(event.target.value)}>
              <option disabled selected value="">Selecciona una opción</option>
              
              {plantelesPorDependencia[selectedDependency]?.map((plantel, index) => (
                <option key={index} value={plantel}>{plantel}</option>
              ))}
            </select>
          </label>


          <text>Genero</text>
          <label className={Styles.checks}>
            <input type='radio' name="genero" value="masculino"/> 
            <p>Masculino</p>
            <input type='radio' name="genero" value="femenino"/>
            <p>Femenino</p>
          </label>

          <label>
            RFC <br/>
            <input type="text" name="curp"/>
          </label>

          <label>
            Estado Civil<br/>
            <select name="estadodoCivil">
              <option disabled selected value="">Selecciona una opción</option>
              <option value="soltero">Soltero</option>
              <option value="casado">Casado</option>
              <option value="divorciado">Divorciado</option>
              <option value="viudo">Viudo</option>
            </select>
          </label>
        </box>
      </form>

    </div>
  )
}