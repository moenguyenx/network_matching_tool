import classes from "@/components/l_circuit.module.css";

function ZinLessThanZload ({L1, C1, Z1, C2, L2}) {
    return (
        <div class="circuit-image-area">
                    <svg version="1.1" xmlns="http://www.w3.org/2000/svg" class="circuit-image" style={{marginLeft: "2rem", marginRight: "2rem"}}>
                            <g class="circuit-group" font-family="Arial" transform="translate(0,10)">
                          <path stroke="black" stroke-width="1" d="M0,20 L10,20 M0,110 L10,110 M100,20 L230,20 M100,110 L230,110"></path>
                          <g class="part-group" transform="translate(10,20)">
                          <text class="refdes" text-anchor="middle" x="45" y="-15">L1</text>
                          <text class="value" text-anchor="middle" x="45" y="25">{L1} nH</text>
                          <path class="part" fill="none" stroke="black" stroke-width="1" d="M0,0 L20,0 A5,8,0,1,1,30,0 A5,8,0,1,1,40,0 A5,8,0,1,1,50,0 A5,8,0,1,1,60,0 A5,8,0,1,1,70,0 L90,0"></path>
                        </g>
                          <g class="part-group" transform="translate(10,110)">
                          <text class="refdes" text-anchor="middle" x="45" y="-15"></text>
                          <text class="value" text-anchor="middle" x="45" y="25"></text>
                          <path class="part" stroke="black" stroke-width="1" d="M0,0 L90,0"></path>
                        </g>
                          <g class="comp-group" transform="translate(110,20)">
                          <text class="refdes" text-anchor="end" x="-12" y="50">C1</text>
                          <text class="value" text-anchor="start" x="12" y="50">{C1} pF</text>
                          <g transform="rotate(90)">
                            <path class="part" stroke="black" stroke-width="1" d="M0,0 L40,0 M40,-10 L40,10 M50,10 L50,-10 M50,0 L90,0"></path>
                          </g>
                        </g>
                          <g class="comp-group" transform="translate(230,20)">
                          <text class="refdes" text-anchor="start" x="12" y="30">Z1</text>
                          <text class="value" text-anchor="start" x="12" y="50">
                            <tspan>{Z1} Ω</tspan>
                          </text>
                          <g transform="rotate(90)">
                            <path class="part" fill="none" stroke="black" stroke-width="1" d="M0,0 L20,0 M20,-10 L70,-10 L70,10 L20,10 L20,-10 M20,-10 L70,10 M20,10 L70,-10 M70,0 L90,0"></path>
                          </g>
                        </g>
                        </g>
                    </svg>


                    <svg version="1.1" xmlns="http://www.w3.org/2000/svg" class="circuit-image" style={{marginLeft: "2rem", marginRight: "2rem"}}>
                            <g class="circuit-group" font-family="Arial" transform="translate(0,10)">
                          <path stroke="black" stroke-width="1" d="M0,20 L10,20 M0,110 L10,110 M100,20 L230,20 M100,110 L230,110"></path>
                          <g class="part-group" transform="translate(10,20)">
                          <text class="refdes" text-anchor="middle" x="45" y="-15">C2</text>
                          <text class="value" text-anchor="middle" x="45" y="25">{C2} pF</text>
                          <path class="part" stroke="black" stroke-width="1" d="M0,0 L40,0 M40,-10 L40,10 M50,10 L50,-10 M50,0 L90,0"></path>
                        </g>
                          <g class="part-group" transform="translate(10,110)">
                          <text class="refdes" text-anchor="middle" x="45" y="-15"></text>
                          <text class="value" text-anchor="middle" x="45" y="25"></text>
                          <path class="part" stroke="black" stroke-width="1" d="M0,0 L90,0"></path>
                        </g>
                          <g class="comp-group" transform="translate(110,20)">
                          <text class="refdes" text-anchor="end" x="-12" y="50">L2</text>
                          <text class="value" text-anchor="start" x="12" y="50">{L2} nH</text>
                          <g transform="rotate(90)">
                            <path class="part" fill="none" stroke="black" stroke-width="1" d="M0,0 L20,0 A5,8,0,1,1,30,0 A5,8,0,1,1,40,0 A5,8,0,1,1,50,0 A5,8,0,1,1,60,0 A5,8,0,1,1,70,0 L90,0"></path>
                          </g>
                        </g>
                          <g class="comp-group" transform="translate(230,20)">
                          <text class="refdes" text-anchor="start" x="12" y="30">Z1</text>
                          <text class="value" text-anchor="start" x="12" y="50">
                            <tspan>{Z1} Ω</tspan>
                          </text>
                          <g transform="rotate(90)">
                            <path class="part" fill="none" stroke="black" stroke-width="1" d="M0,0 L20,0 M20,-10 L70,-10 L70,10 L20,10 L20,-10 M20,-10 L70,10 M20,10 L70,-10 M70,0 L90,0"></path>
                          </g>
                        </g>
                        </g>
                    </svg>
                </div>
    )
};

function ZinMoreThanZload({L1, C1, Z1, C2, L2}) {
    return (
        <div class="circuit-image" >
        <svg version="1.1" xmlns="http://www.w3.org/2000/svg" class="circuit-image" style={{marginLeft: "2rem", marginRight: "2rem"}}>
    <g class="circuit-group" font-family="Arial" transform="translate(0,10)">
  <path stroke="black" stroke-width="1" d="M0,20 L75,20 M0,110 L75,110 M165,20 L210,20 M165,110 L210,110"></path>
  <g class="comp-group" transform="translate(40,20)">
  <text class="refdes" text-anchor="end" x="-12" y="50">C1</text>
  <text class="value" text-anchor="start" x="12" y="50">{C1} pF</text>
  <g transform="rotate(90)">
    <path class="part" stroke="black" stroke-width="1" d="M0,0 L40,0 M40,-10 L40,10 M50,10 L50,-10 M50,0 L90,0"></path>

  </g>
</g>

  <g class="part-group" transform="translate(75,20)">
  <text class="refdes" text-anchor="middle" x="45" y="-15">L1</text>
  <text class="value" text-anchor="middle" x="45" y="25">{L1} nH</text>
  <path class="part" fill="none" stroke="black" stroke-width="1" d="M0,0 L20,0 A5,8,0,1,1,30,0 A5,8,0,1,1,40,0 A5,8,0,1,1,50,0 A5,8,0,1,1,60,0 A5,8,0,1,1,70,0 L90,0"></path>

</g>

  <g class="part-group" transform="translate(75,110)">
  <text class="refdes" text-anchor="middle" x="45" y="-15"></text>
  <text class="value" text-anchor="middle" x="45" y="25"></text>
  <path class="part" stroke="black" stroke-width="1" d="M0,0 L90,0"></path>

</g>

  <g class="comp-group" transform="translate(210,20)">
  <text class="refdes" text-anchor="start" x="12" y="30">Z1</text>
  <text class="value" text-anchor="start" x="12" y="50">
    <tspan>{Z1} Ω</tspan>
  </text>
  <g transform="rotate(90)">
    <path class="part" fill="none" stroke="black" stroke-width="1" d="M0,0 L20,0 M20,-10 L70,-10 L70,10 L20,10 L20,-10 M20,-10 L70,10 M20,10 L70,-10 M70,0 L90,0"></path>

  </g>
</g>
</g>

</svg>

        <svg version="1.1" xmlns="http://www.w3.org/2000/svg" class="circuit-image" style={{marginLeft: "2rem", marginRight: "2rem"}}>
    <g class="circuit-group" font-family="Arial" transform="translate(0,10)">
  <path stroke="black" stroke-width="1" d="M0,20 L75,20 M0,110 L75,110 M165,20 L210,20 M165,110 L210,110"></path>
  <g class="comp-group" transform="translate(40,20)">
  <text class="refdes" text-anchor="end" x="-12" y="50">L2</text>
  <text class="value" text-anchor="start" x="12" y="50">{L2} nH</text>
  <g transform="rotate(90)">
    <path class="part" fill="none" stroke="black" stroke-width="1" d="M0,0 L20,0 A5,8,0,1,1,30,0 A5,8,0,1,1,40,0 A5,8,0,1,1,50,0 A5,8,0,1,1,60,0 A5,8,0,1,1,70,0 L90,0"></path>

  </g>
</g>

  <g class="part-group" transform="translate(75,20)">
  <text class="refdes" text-anchor="middle" x="45" y="-15">C2</text>
  <text class="value" text-anchor="middle" x="45" y="25">{C2} pF</text>
  <path class="part" stroke="black" stroke-width="1" d="M0,0 L40,0 M40,-10 L40,10 M50,10 L50,-10 M50,0 L90,0"></path>

</g>

  <g class="part-group" transform="translate(75,110)">
  <text class="refdes" text-anchor="middle" x="45" y="-15"></text>
  <text class="value" text-anchor="middle" x="45" y="25"></text>
  <path class="part" stroke="black" stroke-width="1" d="M0,0 L90,0"></path>

</g>

  <g class="comp-group" transform="translate(210,20)">
  <text class="refdes" text-anchor="start" x="12" y="30">Z1</text>
  <text class="value" text-anchor="start" x="12" y="50">
    <tspan>{Z1} Ω</tspan>
  </text>
  <g transform="rotate(90)">
    <path class="part" fill="none" stroke="black" stroke-width="1" d="M0,0 L20,0 M20,-10 L70,-10 L70,10 L20,10 L20,-10 M20,-10 L70,10 M20,10 L70,-10 M70,0 L90,0"></path>

  </g>
</g>
</g>

</svg>

    </div>
    )
};

export {ZinLessThanZload, ZinMoreThanZload};