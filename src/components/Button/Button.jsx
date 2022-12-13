import s from './style.module.css'

function Button({ text, type }) {
  const onClickBtn = () => console.log('CLICK')
  return (
   <button
      className={s.btn}
      /*{s.btn, {
        [s.secondary]: type === 'secondary',
        [s.primary]: type === 'primary',
      }}*/
      onClick={onClickBtn}
    >
      { text }

    </button>
  )
}

export {
  Button,
}
