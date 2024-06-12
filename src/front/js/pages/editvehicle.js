import React, {useEffect, useContext} from "react";
import { useParams } from "react-router-dom";
import { Context } from "../store/appContext.js";
import { EditVehicleForm } from "../component/editvehicleform.js";

export const EditVehicle = () => {
    const { store, actions } = useContext(Context);
    const params = useParams();
    const showForm = params.id == store.details.id;

    useEffect (() => {
        actions.getDetails(params.id);
    }, []);

    return (
        <div className="footer-view add-edit-vehicle-form">
            {showForm
                ? <EditVehicleForm {...store.details} /> 
                : null
            }
        </div>
    )
 };
   