import { useRef, useState } from 'react'
import Styles from './NavBarMenu.module.css'
import estudiantes from '../../assets/estudiantes.svg'
import usuario from '../../assets/usuario.svg'
import nuevoUsuario from '../../assets/new.svg'
import profilePhoto from '../../assets/photo.svg'

export const NavBarMenu = () => {

    const [open, setOpen] = useState(false);
    const navRef = useRef();

    return (
        <div
        ref={navRef}
        className={ !open ? Styles.nav : Styles.nav__active }  onMouseOver={
            () => {
                if ( open ) {
                    return
                } else {
                    setOpen(true)
                }
            }
        }
            
        onMouseLeave={
            () => {
                if ( !open ) {
                    return
                } else {
                    setOpen(false)
                }
            }
        }
        >
            <div className={Styles.profilePhoto}>
                <img className={Styles.profilePhoto} src={profilePhoto} alt="profilePhoto" />
                <p className={Styles.userName}> Nombre Nombre </p>
                <p className={Styles.userType}> ADMIN</p>
            </div>

            <div className={Styles.buttons}> 
                <button> <img src={nuevoUsuario} alt="nuevoUsuario" /> Nuevo Registro </button>
                <button> <img src={estudiantes} alt="beneficiarios" /> Beneficiarios </button>
                <button> <img src={usuario} alt="usuario" /> Usuarios </button>
            </div>
        </div>
    )
}
