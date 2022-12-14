import s from './style.module.css'

function Button({ text, type, onClick }) {
  const onClickBtn = () => console.log('CLICK')
  return (
   <button onClick={onClick}
      className={s.btn}
      /*{s.btn, {
        [s.secondary]: type === 'secondary',
        [s.primary]: type === 'primary',
      }}*/
      // onClick={onClickBtn}
    >
      { text }

    </button>
  )
}

export {
  Button,
}
