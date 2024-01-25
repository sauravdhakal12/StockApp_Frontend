import ReactDOM from 'react-dom/client'
import App from './App.jsx'

/* STRICT MODE:
  
  Strict Mode enables the following development-only behaviors:
    - Your components will re-render an extra time to find bugs caused by impure rendering.
    - Your components will re-run Effects an extra time to find bugs caused by missing Effect cleanup.
    - Your components will be checked for usage of deprecated APIs.
  
  Removed strict mode for now, caused error in useEffect at Home.jsx
*/

ReactDOM.createRoot(document.getElementById('root')).render(
  <>
    <App />
  </>
)
