"use client"
import { useState, useEffect } from "react";
import { ZinLessThanZload, ZinMoreThanZload } from "@/components/l_circuit";


export default function LCircuit() {
    const [Zin, setZin] = useState(0);
    const [freq, setFreq] = useState(0);
    const [Zload, setZload] = useState(0);
    const [invalidInput, setInvalidInput] = useState(false);

    useEffect(() => {
        console.log(Zin);
        console.log(freq);
        console.log(Zload);
        if (Zin < Zload) {
            setInvalidInput(true);
        } else {
            setInvalidInput(false);
        }
    }, [Zin, Zload, freq])
    
    return (
        <>
        <div style={{marginLeft: "2rem"}}>
            <h1>L-Circuit Network Matching</h1>

            <div class="user-input-area">
                <h3>Parameters</h3>
                <div class="">
                  <label class="row-heading" for="Impedance">Z-in:</label>
                  <input class="row-data" id="Impedance" value={Zin} onChange={(e) => setZin(e.target.value)}/>
                  <span class="row-units"> Ω </span>
                  <span class="row-range">(0 &lt; Z<sub>o</sub> &lt;= 1000)</span>
                </div>
                <div class="">
                  <label class="row-heading" for="Frequency">Frequency:</label>
                  <input class="row-data" id="Frequency" value={freq} onChange={(e) => setFreq(e.target.value)}/>
                  <span class="row-units"> MHz </span>
                  <span class="row-range">(0 &lt; F<sub>o</sub> &lt;= 20000)</span>
                </div>
                <div class="">
                  <label class="row-heading" for="ZLoad">Z-load:</label>
                  <input class="row-data" id="ZLoad" value={Zload} onChange={(e) => setZload(e.target.value)}/>
                  <span class="row-units">  </span>
                  <span class="row-range">Ω (0 &lt; R<sub>L</sub> &lt;= 20000)</span>
                </div>
            </div>

            <div class="results-area">
                <div class="output-summary">
                    <h3>Outputs</h3>
                    <div class="">
                      <span class="sum-heading">L1: </span>
                      <span class="row-value">81.713 nH</span>
                    </div>
                        <div class="">
                      <span class="sum-heading">C1: </span>
                      <span class="row-value">26.344 pF</span>
                    </div>
                        <div class="">
                      <span class="sum-heading">Z1: </span>
                      <span class="row-value">70.67</span>
                    </div>
                            <div class="">
                      <span class="sum-heading">C2: </span>
                      <span class="row-value">30.999 pF</span>
                    </div>
                        <div class="">
                      <span class="sum-heading">L2: </span>
                      <span class="row-value">462.602 nH</span>
                    </div>
                </div>
            </div>
                <br />
                {invalidInput ?
                    <ZinLessThanZload L1={10} C1={10} L2={10} C2={10} Z1={10} /> :
                    <ZinMoreThanZload L1={20} C1={20} L2={20} C2={20} Z1={10} />
                }
            </div>
        </>
    )
}