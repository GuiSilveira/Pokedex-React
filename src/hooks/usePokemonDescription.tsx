import axios from "axios";
import { useEffect, useState } from "react";

export const usePokemonDescription = (urlDescription) => {
  const [description, setDescription] = useState<string>("");

  useEffect(() => {
    axios
      .get(urlDescription)
      .then((response) => response.data)
      .then((data) => {
        const flavorText = data.flavor_text_entries[0].flavor_text;

        const formattedFlavorText = flavorText.replace("\f", " ");

        setDescription(formattedFlavorText);
      });
  }, [urlDescription]);

  return description;
};
