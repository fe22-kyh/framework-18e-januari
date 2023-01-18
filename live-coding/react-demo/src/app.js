/*function AppInputComponent() {
  return <input type="text" placeholder="write something" />
}*/

import { AppFooter } from "./components/footer";
import { AppHeader } from "./components/header";
import { AppHome } from "./components/home";

export default function App() {
  return (
    <div>
      <AppHeader title="Best awesome super duper site" />
      <AppHome />
      <AppFooter />
    </div>
  );
}