import React, { useContext, useEffect, useState } from "react";
import { Context } from "../store/appContext";
import DatePicker from "react-datepicker";

export const FiltroFecha = () => {
    const { store, actions } = useContext(Context);
    const [dateRange, setDateRange] = useState([store.fechaInicio, store.fechaFin]);
    const [startDate, endDate] = dateRange;    
  

    useEffect(() => {
        if (startDate && endDate) {
            actions.filterdays(startDate, endDate);
        }
    },[startDate, endDate]) 
   
    return (
        <>
            <DatePicker 
                placeholderText="Recogida - Devolución"
                className="btn btn-outline-success text-center border-2 border-success bg-white text-secondary"
                dateFormat="dd/MM/YYYY"
                todayButton="Friendly Wheels" 
                selectsRange={true}
                startDate={startDate}
                endDate={endDate}
                onChange={(update) => {
                    setDateRange(update);
                }}
                minDate={new Date()}
                excludeDates={[
                    { date: new Date(), message: "El día de hoy no se puede incluir" }
                ]}
            />
        </>
    );
};
