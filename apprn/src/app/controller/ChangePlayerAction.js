import React, { useState } from "react";

export const ChangePlayerAction = () => {
    const test = ["anh", "yeu", "em"];
  const [idPlayer, setIdPlayer] = useState(0);

  const handlePress = () => {
    setIdPlayer(idPlayer + 1);
  };

    return {
        handlePress,
        idPlayer
    };
};
