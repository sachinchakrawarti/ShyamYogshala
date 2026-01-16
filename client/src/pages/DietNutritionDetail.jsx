import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

export default function DietNutritionDetail() {
  const { id } = useParams();
  const [item, setItem] = useState(null);

  useEffect(() => {
    axios.get(`http://localhost:5000/api/diet-nutrition/${id}`)
      .then(res => setItem(res.data));
  }, [id]);

  if (!item) return <p>Loading...</p>;

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold">{item.title}</h1>
      <img src={item.image} alt={item.title} className="w-full my-4"/>
      <p>{item.content}</p>
      <ul className="mt-4 list-disc list-inside">
        {item.key_points.map((kp, idx) => (
          <li key={idx}>{kp}</li>
        ))}
      </ul>
    </div>
  );
}
