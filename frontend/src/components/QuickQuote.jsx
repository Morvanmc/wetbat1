import React, { useState } from 'react';
import { BiRightArrow } from "react-icons/bi";
import {
    BoxTitle, ButtonSub, Content,
    DivForm, DivInput, DivTitle, LabelName
}
    from './QuickQuote.style';
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from "axios";

export function QuickQuote() {
    const [from, setFrom] = useState("");
    const [destination, setDestination] = useState("");
    const [departure, setDeparture] = useState("");
    const [reture, setReture] = useState("");
    const [people, setPeople] = useState("");
    const [transportation, setTransportation] = useState("");
    const [clientName, setClientName] = useState("");
    const [clientPhone, setClientPhone] = useState("");

    const submitQuote = () => {
        axios.post('https://wetbat-challenge.herokuapp.com/api/insert', {
            fromDeparture: from,
            destination: destination,
            departureDate: departure,
            retureDate: reture,
            numberOfPeoples: people,
            transportation: transportation == 1 ? 'Rental car' : 'Bus',
            clientName: clientName,
            clientPhone: clientPhone,
        }).then(() => {
            alert("Successful insert");
            setFrom('');
            setDestination('');
            setDeparture('');
            setReture('');
            setPeople('');
            setTransportation('');
            setClientName('');
            setClientPhone('');
        })
        .catch(err => console.log(err))
    };

    return (
        <Content>
            <DivTitle>
                <BiRightArrow style={{ color: "#5BBFBA" }} size={20} />
                <BiRightArrow style={{ color: "#5BBFBA", marginLeft: "-8px" }} size={20} />
                <BoxTitle>Quick quote</BoxTitle>
            </DivTitle>
            <DivForm>
                <DivInput>
                    <LabelName for="fromInput">FROM:</LabelName>
                    <input
                        type="text"
                        class="form-control"
                        id="fromInput"
                        placeholder="FROM"
                        onChange={(e) => { setFrom(e.target.value) }}
                    />
                </DivInput>

                <DivInput>
                    <LabelName for="destinationInput">DESTINATION:</LabelName>
                    <input
                        type="text"
                        class="form-control"
                        id="destinationInput"
                        placeholder="DESTINATION"
                        onChange={(e) => { setDestination(e.target.value) }}
                    />
                </DivInput>

                <DivInput class="col-auto">
                    <LabelName for="departureInput">DEPARTURE DATE:</LabelName>
                    <input
                        type="date"
                        class="form-control"
                        id="departureInput"
                        placeholder="DEPARTURE"
                        onChange={(e) => { setDeparture(e.target.value) }}
                    />
                </DivInput>

                <DivInput class="col-auto">
                    <LabelName for="retureInput">RETURE DATE:</LabelName>
                    <input
                        type="date"
                        class="form-control"
                        id="retureInput"
                        placeholder="RETURE"
                        onChange={(e) => { setReture(e.target.value) }}
                    />
                </DivInput>

                <DivInput class="col-auto">
                    <LabelName for="peopleInput">PEOPLE:</LabelName>
                    <input
                        type="text"
                        class="form-control"
                        id="peopleInput"
                        placeholder="PEOPLES"
                        onChange={(e) => { setPeople(e.target.value) }}
                    />
                </DivInput>

                <DivInput class="col-auto">
                    <LabelName for="transportInput">TRANSPORTATION:</LabelName>
                    <select class="form-select" id="transportInput"
                        onChange={(e) => { setTransportation(e.target.value) }}
                    >
                        <option selected>CHOOSE...</option>
                        <option value={1}>Rental Car</option>
                        <option value={2}>Bus</option>
                    </select>
                </DivInput>

                <DivInput>
                    <LabelName for="clientNameInput">YOUR NAME:</LabelName>
                    <input
                        type="text"
                        class="form-control"
                        id="clientNameInput"
                        placeholder="NAME"
                        onChange={(e) => { setClientName(e.target.value) }}
                    />
                </DivInput>
                <DivInput>
                    <LabelName for="clientPhoneInput">YOUR PHONE:</LabelName>
                    <input
                        type="text"
                        class="form-control"
                        id="clientPhoneInput"
                        placeholder="PHONE"
                        onChange={(e) => { setClientPhone(e.target.value) }}
                    />
                </DivInput>
                <DivInput>
                    <ButtonSub type="submit" onClick={submitQuote}>Create a quote</ButtonSub>
                </DivInput>
            </DivForm>
        </Content>
    );
};