import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "./App";
import CadastroUsuario from './components/cadastroUsuario/cadastroUsuario'
import LoggedUser from "./components/loggeduser/loggedUserIndex";
import Login from './components/login/loginIndex'
import Contact from './components/loggeduser/contact/contactIndex'
import NewContact from "./components/loggeduser/newcontact/newContactIndex";
import Contacts from "./components/loggeduser/contacts/contactsIndex";

export default function Router() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={ <App />}>
                    <Route path="cadastroUsuario" element={ <CadastroUsuario />}></Route>
                    <Route path="login" element={ <Login />}></Route>
                </Route>
                <Route path="loggeduser" element={ <LoggedUser />}>
                    <Route path='contacts' element={ <Contacts />}/>
                    <Route path='contact' element={ <Contact />}/>
                    <Route path="newcontact" element={<NewContact/>}/>
                </Route>
            </Routes>
        </BrowserRouter>
    )
}