// in src/admin/index.tsx
import { Admin, Resource, ListGuesser, EditGuesser, Create, ShowGuesser, radiantLightTheme } from "react-admin";
// import jsonServerProvider from "ra-data-json-server"; # remove these
import { createTrailbaseProvider } from "/workspaces/A2_Practice_2/my-admin/ra-trailbase (1).js"; // ""../ra-trailabse";
import { OrderCreate, OrderEdit, OrderList, OrderShow } from "../Tables/ORDERS";
import { BookCreate, BookEdit, BookList, BookShow } from "../Tables/BOOK";
import { PublisherCreate, PublisherEdit, PublisherList, PublisherShow } from "../Tables/PUBLISHER";
import { RequestCreate, RequestEdit, RequestList, RequestShow } from "../Tables/REQUEST";
import { StudentCreate, StudentEdit, StudentList, StudentShow } from "../Tables/STUDENT";

// icons - copied from react code. Then add to resource
import BookIcon from '@mui/icons-material/Book';
import PeopleIcon from '@mui/icons-material/People';

const TRAILBASE_URL = "https://refactored-happiness-x59qj7xpwxv43694j-4000.app.github.dev/"
const {dataProvider, authProvider} = await createTrailbaseProvider(TRAILBASE_URL);
// const dataProvider = jsonServerProvider("https://jsonplaceholder.typicode.com");

const App = () => (
  <Admin dataProvider={dataProvider} authProvider={authProvider} theme={radiantLightTheme} >
    <Resource name="BOOK" list={BookList} edit= {BookEdit} create = {BookCreate} show = {BookShow} icon={BookIcon}/> 
    <Resource name="ORDERS" list={OrderList} edit= {OrderEdit} create = {OrderCreate} show = {OrderShow}/>
    <Resource name="PUBLISHER" list={PublisherList} edit= {PublisherEdit} create = {PublisherCreate} show = {PublisherShow}/>
    <Resource name="REQUEST" list={RequestList} edit= {RequestEdit} create = {RequestCreate} show = {RequestShow} />
    <Resource name="STUDENT" list={StudentList} edit= {StudentEdit} create = {StudentCreate} show = {StudentShow} icon={PeopleIcon}/>
  </Admin>
);

export default App;