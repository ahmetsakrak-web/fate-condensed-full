import {CharacterGroup} from "../styles/inappStyles/upSide";
import CharacterSheet from "./CharacterSheet";
const SheetGroup = (karakterData, sheetUpdate, sheetDelete) => (
    <CharacterGroup>
      {karakterData.map((karakter) => {
        return (
          <CharacterSheet
            key={karakter._id}
            sheetDelete={sheetDelete}
            karakterData={karakter}
            sheetUpdate={sheetUpdate}
          />
        );
      })}
    </CharacterGroup>
  );

  export default SheetGroup;