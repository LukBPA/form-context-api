/*
	Napraviti mini-library za form submission.
	Implementacija u pozadini treba da koristi context API i da se ne oslanja na postojece npm pakete za forme.
	Sva logika (input[value], input[onChange], form[onSumbit]) treba da se nalazi u Form i FormInput
	komponentama tako da nije izlozena korisniku library-a.

	Ispod je primjer komponente koja bi koristila library na zeljeni nacin. Ukoliko ovakva struktura
	bude u browseru rezultovala renderovanju forme koja na submit loguje userInfo objekat sa izmjenjenim vrijednostima,
	zadatak se smatra uspjesno zavrsenim.
	
	Za zadatak kreirati poseban projekat gdje ce sadrzaj App.tsx fajla biti ovaj fajl.

	Koristiti React i TypeScript.

	Puno srece ;-)
*/
import { useState } from "react";
import { Form, FormInput } from "./components";

export const App = () => {
  // Example
  const [userInfo, setUserInfo] = useState({
    email: "example@alea.com",
    age: 30,
    name: "John Doe",
    phone: {
      ext: 387,
      number: 123456,
    },
  });

  return (
    <Form initialValues={userInfo} onSubmit={setUserInfo}>
      <FormInput
        type="email"
        required
        name="email"
        placeholder="your@email.com"
      />
      <FormInput type="text" name="name" placeholder="Name" required={false} />
      <FormInput type="number" name="age" placeholder="Age" required={false} />
      <FormInput
        type="number"
        name="phone.ext"
        placeholder="Area code"
        required={false}
      />
      <FormInput
        type="number"
        name="phone.number"
        placeholder="Phone number"
        required={false}
      />
      <FormInput type="submit" name="Submit" required={false} />
    </Form>
  );
};

export default App;
