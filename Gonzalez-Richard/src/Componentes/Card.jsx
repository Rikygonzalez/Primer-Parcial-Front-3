import styles from './Menu.module.css'

export const Card = (props) => {

    return (
    <div className={styles.menu}>
        <strong>{props.name}</strong><br />
        <strong>Sabemos que tu color favorito es: </strong><br />
        <button 
        className='button-Card'
        style={{ backgroundColor: props.item, width: '100%' } }>
        {props.item}
        </button>
    </div>
)
}