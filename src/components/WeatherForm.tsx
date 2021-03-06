import React, { useState } from "react";
import { useSetRecoilState } from "recoil";
import { cityIdState } from "../states/rootStates/cityId";
import { cities, CityId } from "../utils/cities";

export const WeatherForm: React.VFC = () => {
  const [cityId, setCityId] = useState<CityId>();
  const setStateCityId = useSetRecoilState(cityIdState);

  const changeCity = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const id = e.currentTarget.value as CityId;
    setCityId(id);
  };

  const submit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStateCityId(cityId);
  };

  return (
    <form onSubmit={submit}>
      <select onChange={changeCity}>
        <option value="">選択なし</option>
        {cities.map((city) => (
          <option value={city.id} key={city.id}>
            {city.name}
          </option>
        ))}
      </select>
      <button type="submit">submit</button>
    </form>
  );
};
