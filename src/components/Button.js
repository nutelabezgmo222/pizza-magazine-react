import classNames from '../features'

const Button = ({outline = false, children = '', onClick = f => f,  specialClasses=''}) => {
  return ( 
    <button onClick={() => onClick()}
      className={classNames(
        'button',
        specialClasses,
        {
          'button--outline': outline,
        }
        )}>
      {children}
    </button>
  )
}

export default Button
