const App = ()=>{
  let [f,sec]=React.useState('Click me')
  const on = ()=>{
    sec('HEllo back')
  }
  return (
    <div><button onClick={on}>{f}</button>
    </div>
  )


};

const a = getElementById('ap')
const root = ReactDOM.createRoot(a)
root.render(<App />)