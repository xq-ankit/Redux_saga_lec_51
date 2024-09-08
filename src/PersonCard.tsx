import { FC } from "react";
import { PersonType } from "./types";

const PersonCard: FC<PersonType> = ({  name, image, email }) => {
  return (
    <div className="p-6 max-w-sm bg-white rounded-lg border border-gray-200 shadow-md m-4">
      <div className="flex flex-col items-center">
        <div className="rounded-full overflow-hidden h-24 w-24 mb-4 bg-gradient-to-r from-purple-400 via-pink-500 to-red-500">
          <img
            src={image}
            alt={name}
            className="h-full w-full object-cover"
          />
        </div>
        <h2 className="text-2xl font-semibold text-gray-800">{name}</h2>
        <p className="text-sm text-gray-500 mt-2">Email: {email}</p>
      </div>
    </div>
  );
};

export default PersonCard;
