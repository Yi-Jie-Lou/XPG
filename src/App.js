import { useEffect, useState } from "react";
import { SketchPicker } from "react-color";
import "./App.css";

function App() {
  const [isSelected, setIsSelected] = useState("");
  const [activeKey, setActiveKey] = useState("");

  const [color, setColor] = useState("#000");

  useEffect(() => {
    if (isSelected) {
      isSelected.style.boxShadow = `2px 2px 15px ${color}, 0 0.3em 0 0.1em #222`;
    }
  }, [color, isSelected]);

  useEffect(() => {
    if (isSelected.dataset) {
      setActiveKey(isSelected.getAttribute("data-key"));
    }
  }, [isSelected]);

  return (
    <div className="App">
      <SketchPicker
        color={color}
        onChange={(color) => {
          setColor(color.hex);
        }}
      />
      <div className="keyborad">
        <div className="keyboard-left">
          <div
            data-key="27"
            className="key--word key--span4"
            style={{ backgroundColor: activeKey === "27" ? "gray" : "#333" }}
            onClick={(e) => {
              setIsSelected(e.currentTarget);
            }}
          >
            <span>esc</span>
          </div>

          <div
            className="key--fn key--span4"
            style={{ visibility: "hidden" }}
          ></div>

          <div
            data-key="112"
            className="key--fn key--span4"
            style={{ backgroundColor: activeKey === "112" ? "gray" : "#333" }}
            onClick={(e) => {
              setIsSelected(e.currentTarget);
            }}
          >
            <span>F1</span>
          </div>

          <div
            data-key="113"
            className="key--fn key--span4"
            style={{ backgroundColor: activeKey === "113" ? "gray" : "#333" }}
            onClick={(e) => {
              setIsSelected(e.currentTarget);
            }}
          >
            <span>F2</span>
          </div>
          <div
            data-key="114"
            className="key--fn key--span4"
            style={{ backgroundColor: activeKey === "114" ? "gray" : "#333" }}
            onClick={(e) => {
              setIsSelected(e.currentTarget);
            }}
          >
            <span>F3</span>
          </div>
          <div
            data-key="115"
            className="key--fn key--span4"
            style={{ backgroundColor: activeKey === "115" ? "gray" : "#333" }}
            onClick={(e) => {
              setIsSelected(e.currentTarget);
            }}
          >
            <span>F4</span>
          </div>

          <div
            className="key--fn key--span2"
            style={{ visibility: "hidden" }}
          ></div>

          <div
            data-key="116"
            className="key--fn key--span4"
            style={{ backgroundColor: activeKey === "116" ? "gray" : "#333" }}
            onClick={(e) => {
              setIsSelected(e.currentTarget);
            }}
          >
            <span>F5</span>
          </div>
          <div
            data-key="117"
            className="key--fn key--span4"
            style={{ backgroundColor: activeKey === "117" ? "gray" : "#333" }}
            onClick={(e) => {
              setIsSelected(e.currentTarget);
            }}
          >
            <span>F6</span>
          </div>
          <div
            data-key="118"
            className="key--fn key--span4"
            style={{ backgroundColor: activeKey === "118" ? "gray" : "#333" }}
            onClick={(e) => {
              setIsSelected(e.currentTarget);
            }}
          >
            <span>F7</span>
          </div>
          <div
            data-key="119"
            className="key--fn key--span4"
            style={{ backgroundColor: activeKey === "119" ? "gray" : "#333" }}
            onClick={(e) => {
              setIsSelected(e.currentTarget);
            }}
          >
            <span>F8</span>
          </div>

          <div
            className="key--fn key--span2"
            style={{ visibility: "hidden" }}
          ></div>

          <div
            data-key="120"
            className="key--fn key--span4"
            style={{ backgroundColor: activeKey === "120" ? "gray" : "#333" }}
            onClick={(e) => {
              setIsSelected(e.currentTarget);
            }}
          >
            <span>F9</span>
          </div>
          <div
            data-key="121"
            className="key--fn key--span4"
            style={{ backgroundColor: activeKey === "121" ? "gray" : "#333" }}
            onClick={(e) => {
              setIsSelected(e.currentTarget);
            }}
          >
            <span>F10</span>
          </div>
          <div
            data-key="122"
            className="key--fn key--span4"
            style={{ backgroundColor: activeKey === "122" ? "gray" : "#333" }}
            onClick={(e) => {
              setIsSelected(e.currentTarget);
            }}
          >
            <span>F11</span>
          </div>
          <div
            data-key="123"
            className="key--fn key--span4"
            style={{ backgroundColor: activeKey === "123" ? "gray" : "#333" }}
            onClick={(e) => {
              setIsSelected(e.currentTarget);
            }}
          >
            <span>F12</span>
          </div>

          <div
            className="key--double key--span4"
            data-key="192"
            style={{
              marginTop: "24px",
              backgroundColor: activeKey === "192" ? "gray" : "#333",
            }}
            onClick={(e) => {
              setIsSelected(e.currentTarget);
            }}
          >
            <div>~ `</div>
          </div>
          <div
            className="key--double key--span4"
            style={{
              marginTop: "24px",
              backgroundColor: activeKey === "49" ? "gray" : "#333",
            }}
            onClick={(e) => {
              setIsSelected(e.currentTarget);
            }}
            data-key="49"
          >
            <div>1 !</div>
          </div>
          <div
            className="key--double key--span4"
            data-key="50"
            style={{
              marginTop: "24px",
              backgroundColor: activeKey === "50" ? "gray" : "#333",
            }}
            onClick={(e) => {
              setIsSelected(e.currentTarget);
            }}
          >
            <div>2 @</div>
          </div>
          <div
            className="key--double key--span4"
            data-key="51"
            style={{
              marginTop: "24px",
              backgroundColor: activeKey === "51" ? "gray" : "#333",
            }}
            onClick={(e) => {
              setIsSelected(e.currentTarget);
            }}
          >
            <div>3 #</div>
          </div>
          <div
            className="key--double key--span4"
            data-key="52"
            style={{
              marginTop: "24px",
              backgroundColor: activeKey === "52" ? "gray" : "#333",
            }}
            onClick={(e) => {
              setIsSelected(e.currentTarget);
            }}
          >
            <div>4 $</div>
          </div>
          <div
            className="key--double key--span4"
            data-key="53"
            style={{
              marginTop: "24px",
              backgroundColor: activeKey === "53" ? "gray" : "#333",
            }}
            onClick={(e) => {
              setIsSelected(e.currentTarget);
            }}
          >
            <div>5 %</div>
          </div>
          <div
            className="key--double key--span4"
            data-key="54"
            style={{
              marginTop: "24px",
              backgroundColor: activeKey === "54" ? "gray" : "#333",
            }}
            onClick={(e) => {
              setIsSelected(e.currentTarget);
            }}
          >
            <div>6 ^</div>
          </div>
          <div
            className="key--double key--span4"
            data-key="55"
            style={{
              marginTop: "24px",
              backgroundColor: activeKey === "55" ? "gray" : "#333",
            }}
            onClick={(e) => {
              setIsSelected(e.currentTarget);
            }}
          >
            <div>7 &</div>
          </div>
          <div
            className="key--double key--span4"
            data-key="56"
            style={{
              marginTop: "24px",
              backgroundColor: activeKey === "56" ? "gray" : "#333",
            }}
            onClick={(e) => {
              setIsSelected(e.currentTarget);
            }}
          >
            <div>8 *</div>
          </div>
          <div
            className="key--double key--span4"
            data-key="57"
            style={{
              marginTop: "24px",
              backgroundColor: activeKey === "57" ? "gray" : "#333",
            }}
            onClick={(e) => {
              setIsSelected(e.currentTarget);
            }}
          >
            <div>9 (</div>
          </div>
          <div
            className="key--double key--span4"
            data-key="48"
            style={{
              marginTop: "24px",
              backgroundColor: activeKey === "48" ? "gray" : "#333",
            }}
            onClick={(e) => {
              setIsSelected(e.currentTarget);
            }}
          >
            <div>0 )</div>
          </div>
          <div
            className="key--double key--span4"
            data-key="189"
            style={{
              marginTop: "24px",
              backgroundColor: activeKey === "189" ? "gray" : "#333",
            }}
            onClick={(e) => {
              setIsSelected(e.currentTarget);
            }}
          >
            <div>－ -</div>
          </div>
          <div
            className="key--double key--span4"
            data-key="187"
            style={{
              marginTop: "24px",
              backgroundColor: activeKey === "187" ? "gray" : "#333",
            }}
            onClick={(e) => {
              setIsSelected(e.currentTarget);
            }}
          >
            <div>＋ =</div>
          </div>
          <div
            className="key--word key--w4 key--span8"
            data-key="8"
            style={{
              marginTop: "24px",
              backgroundColor: activeKey === "8" ? "gray" : "#333",
            }}
            onClick={(e) => {
              setIsSelected(e.currentTarget);
            }}
          >
            <span>delete</span>
          </div>

          <div
            className="key--word key--w4 key--span6"
            data-key="9"
            style={{ backgroundColor: activeKey === "9" ? "gray" : "#333" }}
            onClick={(e) => {
              setIsSelected(e.currentTarget);
            }}
          >
            <span>tab</span>
          </div>
          <div
            className="key--letter key--span4"
            data-key="Q"
            style={{ backgroundColor: activeKey === "Q" ? "gray" : "#333" }}
            onClick={(e) => {
              setIsSelected(e.currentTarget);
            }}
          >
            <span> Q </span>
          </div>
          <div
            className="key--letter key--span4"
            data-key="W"
            style={{ backgroundColor: activeKey === "W" ? "gray" : "#333" }}
            onClick={(e) => {
              setIsSelected(e.currentTarget);
            }}
          >
            <span> W </span>
          </div>
          <div
            className="key--letter key--span4"
            data-key="E"
            style={{ backgroundColor: activeKey === "E" ? "gray" : "#333" }}
            onClick={(e) => {
              setIsSelected(e.currentTarget);
            }}
          >
            <span> E </span>
          </div>
          <div
            className="key--letter key--span4"
            data-key="R"
            style={{ backgroundColor: activeKey === "R" ? "gray" : "#333" }}
            onClick={(e) => {
              setIsSelected(e.currentTarget);
            }}
          >
            <span> R </span>
          </div>
          <div
            className="key--letter key--span4"
            data-key="T"
            style={{ backgroundColor: activeKey === "T" ? "gray" : "#333" }}
            onClick={(e) => {
              setIsSelected(e.currentTarget);
            }}
          >
            <span> T </span>
          </div>
          <div
            className="key--letter key--span4"
            data-key="Y"
            style={{ backgroundColor: activeKey === "Y" ? "gray" : "#333" }}
            onClick={(e) => {
              setIsSelected(e.currentTarget);
            }}
          >
            <span> Y </span>
          </div>
          <div
            className="key--letter key--span4"
            data-key="U"
            style={{ backgroundColor: activeKey === "U" ? "gray" : "#333" }}
            onClick={(e) => {
              setIsSelected(e.currentTarget);
            }}
          >
            <span> U </span>
          </div>
          <div
            className="key--letter key--span4"
            data-key="I"
            style={{ backgroundColor: activeKey === "I" ? "gray" : "#333" }}
            onClick={(e) => {
              setIsSelected(e.currentTarget);
            }}
          >
            <span> I </span>
          </div>
          <div
            className="key--letter key--span4"
            data-key="O"
            style={{ backgroundColor: activeKey === "O" ? "gray" : "#333" }}
            onClick={(e) => {
              setIsSelected(e.currentTarget);
            }}
          >
            <span> O </span>
          </div>
          <div
            className="key--letter key--span4"
            data-key="P"
            style={{ backgroundColor: activeKey === "P" ? "gray" : "#333" }}
            onClick={(e) => {
              setIsSelected(e.currentTarget);
            }}
          >
            <span> P </span>
          </div>
          <div
            className="key--double key--span4"
            data-key="219"
            style={{ backgroundColor: activeKey === "219" ? "gray" : "#333" }}
            onClick={(e) => {
              setIsSelected(e.currentTarget);
            }}
          >
            <div>&#91; &#123;</div>
          </div>
          <div
            className="key--double key--span4"
            data-key="221"
            style={{ backgroundColor: activeKey === "221" ? "gray" : "#333" }}
            onClick={(e) => {
              setIsSelected(e.currentTarget);
            }}
          >
            <div>&#93; &#125;</div>
          </div>
          <div
            className="key--double key--span6"
            data-key="220"
            style={{ backgroundColor: activeKey === "220" ? "gray" : "#333" }}
            onClick={(e) => {
              setIsSelected(e.currentTarget);
            }}
          >
            <div>\ |</div>
          </div>

          <div
            className=" key--word key--w5 key--span8"
            data-key="20"
            style={{ backgroundColor: activeKey === "20" ? "gray" : "#333" }}
            onClick={(e) => {
              setIsSelected(e.currentTarget);
            }}
          >
            <span>caps</span>
          </div>
          <div
            className="key--letter key--span4"
            data-key="A"
            style={{ backgroundColor: activeKey === "A" ? "gray" : "#333" }}
            onClick={(e) => {
              setIsSelected(e.currentTarget);
            }}
          >
            <span> A </span>
          </div>
          <div
            className="key--letter key--span4"
            data-key="S"
            style={{ backgroundColor: activeKey === "S" ? "gray" : "#333" }}
            onClick={(e) => {
              setIsSelected(e.currentTarget);
            }}
          >
            <span> S </span>
          </div>
          <div
            className="key--letter key--span4"
            data-key="D"
            style={{ backgroundColor: activeKey === "D" ? "gray" : "#333" }}
            onClick={(e) => {
              setIsSelected(e.currentTarget);
            }}
          >
            <span> D </span>
          </div>
          <div
            className="key--letter key--span4"
            data-key="F"
            style={{ backgroundColor: activeKey === "F" ? "gray" : "#333" }}
            onClick={(e) => {
              setIsSelected(e.currentTarget);
            }}
          >
            <span> F </span>
          </div>
          <div
            className="key--letter key--span4"
            data-key="G"
            style={{ backgroundColor: activeKey === "G" ? "gray" : "#333" }}
            onClick={(e) => {
              setIsSelected(e.currentTarget);
            }}
          >
            <span> G </span>
          </div>
          <div
            className="key--letter key--span4"
            data-key="H"
            style={{ backgroundColor: activeKey === "H" ? "gray" : "#333" }}
            onClick={(e) => {
              setIsSelected(e.currentTarget);
            }}
          >
            <span> H </span>
          </div>
          <div
            className="key--letter key--span4"
            data-key="J"
            style={{ backgroundColor: activeKey === "J" ? "gray" : "#333" }}
            onClick={(e) => {
              setIsSelected(e.currentTarget);
            }}
          >
            <span> J </span>
          </div>
          <div
            className="key--letter key--span4"
            data-key="K"
            style={{ backgroundColor: activeKey === "K" ? "gray" : "#333" }}
            onClick={(e) => {
              setIsSelected(e.currentTarget);
            }}
          >
            <span> K </span>
          </div>
          <div
            className="key--letter key--span4"
            data-key="L"
            style={{ backgroundColor: activeKey === "L" ? "gray" : "#333" }}
            onClick={(e) => {
              setIsSelected(e.currentTarget);
            }}
          >
            <span> L </span>
          </div>
          <div
            className="key--double key--span4"
            data-key="186"
            style={{ backgroundColor: activeKey === "186" ? "gray" : "#333" }}
            onClick={(e) => {
              setIsSelected(e.currentTarget);
            }}
          >
            <div>; :</div>
          </div>
          <div
            className="key--double key--span4"
            data-key="222"
            style={{ backgroundColor: activeKey === "222" ? "gray" : "#333" }}
            onClick={(e) => {
              setIsSelected(e.currentTarget);
            }}
          >
            <div>' "</div>
          </div>
          <div
            className="key--word key--w5 key--span8"
            data-key="13"
            style={{ backgroundColor: activeKey === "13" ? "gray" : "#333" }}
            onClick={(e) => {
              setIsSelected(e.currentTarget);
            }}
          >
            <span>enter</span>
          </div>

          <div
            className="key--word key--w6 key--span10"
            data-key="16"
            style={{ backgroundColor: activeKey === "16" ? "gray" : "#333" }}
            onClick={(e) => {
              setIsSelected(e.currentTarget);
            }}
          >
            <span>shift</span>
          </div>
          <div
            className="key--letter key--span4"
            data-key="Z"
            style={{ backgroundColor: activeKey === "Z" ? "gray" : "#333" }}
            onClick={(e) => {
              setIsSelected(e.currentTarget);
            }}
          >
            <span> Z </span>
          </div>
          <div
            className="key--letter key--span4"
            data-key="X"
            style={{ backgroundColor: activeKey === "X" ? "gray" : "#333" }}
            onClick={(e) => {
              setIsSelected(e.currentTarget);
            }}
          >
            <span> X </span>
          </div>
          <div
            className="key--letter key--span4"
            data-key="C"
            style={{ backgroundColor: activeKey === "C" ? "gray" : "#333" }}
            onClick={(e) => {
              setIsSelected(e.currentTarget);
            }}
          >
            <span> C </span>
          </div>
          <div
            className="key--letter key--span4"
            data-key="V"
            style={{ backgroundColor: activeKey === "V" ? "gray" : "#333" }}
            onClick={(e) => {
              setIsSelected(e.currentTarget);
            }}
          >
            <span> V </span>
          </div>
          <div
            className="key--letter key--span4"
            data-key="B"
            style={{ backgroundColor: activeKey === "B" ? "gray" : "#333" }}
            onClick={(e) => {
              setIsSelected(e.currentTarget);
            }}
          >
            <span> B </span>
          </div>
          <div
            className="key--letter key--span4"
            data-key="N"
            style={{ backgroundColor: activeKey === "N" ? "gray" : "#333" }}
            onClick={(e) => {
              setIsSelected(e.currentTarget);
            }}
          >
            <span> N </span>
          </div>
          <div
            className="key--letter key--span4"
            data-key="M"
            style={{ backgroundColor: activeKey === "M" ? "gray" : "#333" }}
            onClick={(e) => {
              setIsSelected(e.currentTarget);
            }}
          >
            <span> M </span>
          </div>
          <div
            className="key--double key--span4"
            data-key="188"
            style={{ backgroundColor: activeKey === "188" ? "gray" : "#333" }}
            onClick={(e) => {
              setIsSelected(e.currentTarget);
            }}
          >
            <div>, &lt;</div>
          </div>
          <div
            className="key--double key--span4"
            data-key="190"
            style={{ backgroundColor: activeKey === "190" ? "gray" : "#333" }}
            onClick={(e) => {
              setIsSelected(e.currentTarget);
            }}
          >
            <div>. &gt;</div>
          </div>
          <div
            className="key--double key--span4"
            data-key="191"
            style={{ backgroundColor: activeKey === "191" ? "gray" : "#333" }}
            onClick={(e) => {
              setIsSelected(e.currentTarget);
            }}
          >
            <div>/ ?</div>
          </div>
          <div
            className="key--word key--w6 key--span10"
            data-key="16-R"
            style={{ backgroundColor: activeKey === "16-R" ? "gray" : "#333" }}
            onClick={(e) => {
              setIsSelected(e.currentTarget);
            }}
          >
            <span>shift</span>
          </div>

          <div
            className="key--word key--span5 "
            data-key="17"
            style={{ backgroundColor: activeKey === "17" ? "gray" : "#333" }}
            onClick={(e) => {
              setIsSelected(e.currentTarget);
            }}
          >
            <span>ctrl</span>
          </div>
          <div
            className="key--word key--w1 key--span6 "
            data-key="91"
            style={{ backgroundColor: activeKey === "91" ? "gray" : "#333" }}
            onClick={(e) => {
              setIsSelected(e.currentTarget);
            }}
          >
            <span></span>
          </div>
          <div
            className="key--word key--w1 key--span5 "
            data-key="18"
            style={{ backgroundColor: activeKey === "18" ? "gray" : "#333" }}
            onClick={(e) => {
              setIsSelected(e.currentTarget);
            }}
          >
            <span>alt</span>
          </div>

          <div
            className="key--double key--span4 key--right key--space key--span24 "
            data-key="32"
            style={{ backgroundColor: activeKey === "32" ? "gray" : "#333" }}
            onClick={(e) => {
              setIsSelected(e.currentTarget);
            }}
          >
            &nbsp;
          </div>
          <div
            className="key--word key--w3 key--span5 "
            data-key="18-R"
            style={{ backgroundColor: activeKey === "18-R" ? "gray" : "#333" }}
            onClick={(e) => {
              setIsSelected(e.currentTarget);
            }}
          >
            <span>alt</span>
          </div>
          <div
            className="key--word key--w3 key--span5 "
            data-key="93-R"
            style={{ backgroundColor: activeKey === "93-R" ? "gray" : "#333" }}
            onClick={(e) => {
              setIsSelected(e.currentTarget);
            }}
          >
            <span>fn</span>
          </div>
          <div
            className="key--word key--w1 key--span5 "
            data-key="92"
            style={{ backgroundColor: activeKey === "92" ? "gray" : "#333" }}
            onClick={(e) => {
              setIsSelected(e.currentTarget);
            }}
          >
            <span></span>
          </div>
          <div
            className="key--word key--w3 key--span5 "
            data-key="17-R"
            style={{ backgroundColor: activeKey === "17-R" ? "gray" : "#333" }}
            onClick={(e) => {
              setIsSelected(e.currentTarget);
            }}
          >
            <span>crtl</span>
          </div>
        </div>

        <div className="keyboard-middle">
          <div
            className="key--letter key--span4"
            data-key="44"
            style={{ backgroundColor: activeKey === "44" ? "gray" : "#333" }}
            onClick={(e) => {
              setIsSelected(e.currentTarget);
            }}
          >
            <span> prt sc</span>
          </div>
          <div
            className="key--letter key--span4"
            data-key="145"
            style={{ backgroundColor: activeKey === "145" ? "gray" : "#333" }}
            onClick={(e) => {
              setIsSelected(e.currentTarget);
            }}
          >
            <span> scr lk </span>
          </div>
          <div
            className="key--letter key--span4"
            data-key="19"
            style={{ backgroundColor: activeKey === "19" ? "gray" : "#333" }}
            onClick={(e) => {
              setIsSelected(e.currentTarget);
            }}
          >
            <span> pause </span>
          </div>
          <div
            className="key--letter key--span4"
            data-key="45"
            style={{
              marginTop: "24px",
              backgroundColor: activeKey === "45" ? "gray" : "#333",
            }}
            onClick={(e) => {
              setIsSelected(e.currentTarget);
            }}
          >
            <span> ins </span>
          </div>
          <div
            className="key--letter key--span4"
            data-key="36"
            style={{
              marginTop: "24px",
              backgroundColor: activeKey === "36" ? "gray" : "#333",
            }}
            onClick={(e) => {
              setIsSelected(e.currentTarget);
            }}
          >
            <span> home </span>
          </div>
          <div
            className="key--letter key--span4"
            data-key="33"
            style={{
              marginTop: "24px",
              backgroundColor: activeKey === "33" ? "gray" : "#333",
            }}
            onClick={(e) => {
              setIsSelected(e.currentTarget);
            }}
          >
            <span> page </span>
          </div>
          <div
            className="key--letter key--span4"
            data-key="46"
            style={{ backgroundColor: activeKey === "46" ? "gray" : "#333" }}
            onClick={(e) => {
              setIsSelected(e.currentTarget);
            }}
          >
            <span> del </span>
          </div>
          <div
            className="key--letter key--span4"
            data-key="35"
            style={{ backgroundColor: activeKey === "35" ? "gray" : "#333" }}
            onClick={(e) => {
              setIsSelected(e.currentTarget);
            }}
          >
            <span> end </span>
          </div>
          <div
            className="key--letter key--span4"
            data-key="34"
            style={{ backgroundColor: activeKey === "34" ? "gray" : "#333" }}
            onClick={(e) => {
              setIsSelected(e.currentTarget);
            }}
          >
            <span> page </span>
          </div>
          <div
            className="key--span4 "
            data-key="37"
            style={{
              gridArea: "6 / 1 / 7 / 5",
              backgroundColor: activeKey === "37" ? "gray" : "#333",
            }}
            onClick={(e) => {
              setIsSelected(e.currentTarget);
            }}
          >
            <span>&#9664;</span>
          </div>
          <div
            className="key--span4 "
            data-key="38"
            style={{
              gridArea: "5 / 5 / 6 / 9",
              backgroundColor: activeKey === "38" ? "gray" : "#333",
            }}
            onClick={(e) => {
              setIsSelected(e.currentTarget);
            }}
          >
            <div>&#9650;</div>
          </div>
          <div
            className="key--span4 "
            data-key="40"
            style={{
              gridArea: "6 / 5 / 7 / 9",
              backgroundColor: activeKey === "40" ? "gray" : "#333",
            }}
            onClick={(e) => {
              setIsSelected(e.currentTarget);
            }}
          >
            <div>&#9660;</div>
          </div>
          <div
            className="key--span4 "
            data-key="39"
            style={{
              gridArea: "6 / 9 / 7 / 13",
              backgroundColor: activeKey === "39" ? "gray" : "#333",
            }}
            onClick={(e) => {
              setIsSelected(e.currentTarget);
            }}
          >
            <span>&#9654;</span>
          </div>
        </div>

        <div className="keyboard-right">
          <div
            className="key--letter key--span4"
            style={{ visibility: "hidden", gridArea: "1 / 1 / 2 / 17" }}
          ></div>

          <div
            className="key--letter key--span4"
            data-key="144"
            style={{
              marginTop: "24px",
              backgroundColor: activeKey === "144" ? "gray" : "#333",
            }}
            onClick={(e) => {
              setIsSelected(e.currentTarget);
            }}
          >
            <span> num lk </span>
          </div>
          <div
            className="key--letter key--span4"
            data-key="111"
            style={{
              marginTop: "24px",
              backgroundColor: activeKey === "111" ? "gray" : "#333",
            }}
            onClick={(e) => {
              setIsSelected(e.currentTarget);
            }}
          >
            <span> / </span>
          </div>
          <div
            className="key--letter key--span4"
            data-key="106"
            style={{
              marginTop: "24px",
              backgroundColor: activeKey === "106" ? "gray" : "#333",
            }}
            onClick={(e) => {
              setIsSelected(e.currentTarget);
            }}
          >
            <span> * </span>
          </div>
          <div
            className="key--letter key--span4"
            data-key="109"
            style={{
              marginTop: "24px",
              backgroundColor: activeKey === "109" ? "gray" : "#333",
            }}
            onClick={(e) => {
              setIsSelected(e.currentTarget);
            }}
          >
            <span> - </span>
          </div>
          <div
            className="key--letter key--span4"
            data-key="103"
            style={{
              backgroundColor: activeKey === "103" ? "gray" : "#333",
            }}
            onClick={(e) => {
              setIsSelected(e.currentTarget);
            }}
          >
            <span> 7home</span>
          </div>
          <div
            className="key--letter key--span4"
            data-key="104"
            style={{
              backgroundColor: activeKey === "104" ? "gray" : "#333",
            }}
            onClick={(e) => {
              setIsSelected(e.currentTarget);
            }}
          >
            <span> 8 ^ </span>
          </div>
          <div
            className="key--letter key--span4"
            data-key="105"
            style={{
              backgroundColor: activeKey === "105" ? "gray" : "#333",
            }}
            onClick={(e) => {
              setIsSelected(e.currentTarget);
            }}
          >
            <span> 9 up</span>
          </div>
          <div
            className="key--letter key--span4"
            data-key="100"
            style={{
              backgroundColor: activeKey === "100" ? "gray" : "#333",
            }}
            onClick={(e) => {
              setIsSelected(e.currentTarget);
            }}
          >
            <span> 4 &lt; </span>
          </div>
          <div
            className="key--letter key--span4"
            data-key="101"
            style={{
              backgroundColor: activeKey === "101" ? "gray" : "#333",
            }}
            onClick={(e) => {
              setIsSelected(e.currentTarget);
            }}
          >
            <span> 5 </span>
          </div>
          <div
            className="key--letter key--span4"
            data-key="102"
            style={{
              backgroundColor: activeKey === "102" ? "gray" : "#333",
            }}
            onClick={(e) => {
              setIsSelected(e.currentTarget);
            }}
          >
            <span> 6 &gt;</span>
          </div>
          <div
            className="key--letter key--span4"
            data-key="97"
            style={{
              backgroundColor: activeKey === "97" ? "gray" : "#333",
            }}
            onClick={(e) => {
              setIsSelected(e.currentTarget);
            }}
          >
            <span> 1 end</span>
          </div>
          <div
            className="key--letter key--span4"
            data-key="98"
            style={{
              backgroundColor: activeKey === "98" ? "gray" : "#333",
            }}
            onClick={(e) => {
              setIsSelected(e.currentTarget);
            }}
          >
            <span> 2 ˇ </span>
          </div>
          <div
            className="key--letter key--span4"
            data-key="99"
            style={{
              backgroundColor: activeKey === "99" ? "gray" : "#333",
            }}
            onClick={(e) => {
              setIsSelected(e.currentTarget);
            }}
          >
            <span> 3 </span>
          </div>
          <div
            className="key--letter key--span4"
            data-key="96"
            style={{
              gridArea: "6 / 1 / 7 / 9",
              backgroundColor: activeKey === "99" ? "gray" : "#333",
            }}
            onClick={(e) => {
              setIsSelected(e.currentTarget);
            }}
          >
            <span> 0 ins </span>
          </div>
          <div
            className="key--letter key--span4"
            data-key="110"
            style={{
              backgroundColor: activeKey === "110" ? "gray" : "#333",
            }}
            onClick={(e) => {
              setIsSelected(e.currentTarget);
            }}
          >
            <span> . del </span>
          </div>
          <div
            className="key--letter key--span4"
            data-key="107"
            style={{
              gridArea: "3 / 13 / 5 / 17",
              backgroundColor: activeKey === "107" ? "gray" : "#333",
            }}
            onClick={(e) => {
              setIsSelected(e.currentTarget);
            }}
          >
            <span style={{ lineHeight: "80px" }}>+</span>
          </div>
          <div
            className="key--letter key--span4"
            data-key="13-R"
            style={{
              gridArea: "5 / 13 / 7 / 17",
              backgroundColor: activeKey === "13-R" ? "gray" : "#333",
            }}
            onClick={(e) => {
              setIsSelected(e.currentTarget);
            }}
          >
            <span style={{ lineHeight: "80px" }}>enter</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
