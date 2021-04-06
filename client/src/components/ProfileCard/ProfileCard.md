This is a documentation about the ProfileCard component. In order to change the inactive status, change `isActive: true` to `isActive: false`.

```js
import { MemoryRouter } from "react-router-dom";
<MemoryRouter>
  <ProfileCard
    mentor={{
      mentor_name: "Max Mustermann",
      competence: "Education & Training",
      buzzwords: ["actor", "filming", "screenwriter", "theater"],
      email: "max.mustermann@gmail.com",
      phone: "016498763569",
      about:
        "Bavaria ipsum dolor sit amet da Kini Radi woaß Haberertanz und sei. Mim i sog ja nix, i red ja bloß liberalitas Bavariae nimmds...",
      image: "../../images/background-petrol.png",
      isActive: true,
    }}
  />
</MemoryRouter>;
```
