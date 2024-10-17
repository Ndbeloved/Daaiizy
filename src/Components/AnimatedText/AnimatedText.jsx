import "./AnimatedText.css"

function AnimatedText({text, size, color}) {
  return (
    <div className="animated-text-cont" style={{height: size, color: color}}>
        <div className="move">
            <span style={{fontSize: size}}>{text}</span><br/>
            <span style={{fontSize: size}}>{text}</span>
        </div>
    </div>
  )
}

export default AnimatedText