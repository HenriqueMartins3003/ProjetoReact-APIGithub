import React from "react";

const MainContainer = () => {
  return (
    <div className="container w-[648px] bg-white p-10 rounded-lg">
      <p className="text-2xl mb-3 mt-2">Títutlo da Pergunta deve ficar aqui</p>
      <span className="text-sm">
        Também é importante ter um espaço para o dono da loja colocar uma
        descrição da pergunta para ajudar o entendimento do usuário
      </span>
      <div className="relative h-[64] w-[384]">
        <img src="/estrelas.png" alt="Raiting" height={64} width={384}></img>
      </div>
      <p className="text-2xl mb-3 mt-2">Títutlo da Pergunta deve ficar aqui</p>
      <span className="text-sm">
        Também é importante ter um espaço para o dono da loja colocar uma
        descrição da pergunta para ajudar o entendimento do usuário
      </span>
      <div className="flex justify-between mt-2">
        <div className="inline-flex flex-col justify-between">
          <input type="radio" name="unica" id="radio1" />
          <label htmlFor="unica">1</label>
        </div>
        <div className="inline-flex flex-col  justify-between">
          <input type="radio" name="unica" id="radio2" />
          <label htmlFor="unica">2</label>
        </div>
        <div className="inline-flex flex-col justify-between">
          <input type="radio" name="unica" id="radio3" />
          <label htmlFor="unica">3</label>
        </div>
        <div className="inline-flex flex-col justify-between">
          <input type="radio" name="unica" id="radio4" />
          <label htmlFor="unica">4</label>
        </div>
        <div className="inline-flex flex-col justify-between">
          <input type="radio" name="unica" id="radio5" />
          <label htmlFor="unica">5</label>
        </div>
        <div className="inline-flex flex-col justify-between">
          <input type="radio" name="unica" id="radio6" />
          <label htmlFor="unica">6</label>
        </div>
        <div className="inline-flex flex-col justify-between">
          <input type="radio" name="unica" id="radio7" />
          <label htmlFor="unica">7</label>
        </div>
        <div className="inline-flex flex-col justify-between">
          <input type="radio" name="unica" id="radio8" />
          <label htmlFor="unica">8</label>
        </div>
        <div className="inline-flex flex-col justify-between">
          <input type="radio" name="unica" id="radio9" />
          <label htmlFor="unica">9</label>
        </div>
        <div className="inline-flex flex-col justify-between">
          <input type="radio" name="unica" id="radio10" />
          <label htmlFor="unica">10</label>
        </div>
      </div>

      <p className="mt-3">
        Descreva o motivo da sua avaliaçao aqui <span>(opicional)</span>{" "}
      </p>
      <textarea
        name="avaliacao"
        id="avaliacao"
        rows={4}
        cols={73}
        placeholder="Digite aqui..."
        className="border rounded-md"
      />

      <br />
      <select name="" id="" className="mt-3 border rounded-md w-[579px] h-12">
        <option
          value=""
          disabled
          defaultValue={"Qual loja você frequenta"}
          hidden
        >
          Qual loja você frequenta?
        </option>
      </select>

      <p className="mt-3"> Pergunta de escolha unica?</p>
      <input type="radio" name="unica" id="radioY" />
      <label htmlFor="unica" className="mr-20 ml-2">
        Sim
      </label>
      <input type="radio" name="unica" id="radioN" />
      <label htmlFor="unica" className="mr-20 ml-2">
        Nao
      </label>

      <p className="mt-3">Pergunta de múltipla escolha?</p>
      <div>
        {" "}
        <button className="border rounded-full mr-2 p-1">OPC 1</button>
        <button className="border rounded-full mr-2 p-1">OPCÃO 2</button>
        <button className="border rounded-full mr-2 p-1">OP</button>
        <button className="border rounded-full mr-2 p-1">OPCÃO 4</button>
        <button className="border rounded-full mr-2 p-1">OPCÃO 5</button>
        <button className="border rounded-full mr-2 p-1">OP </button>
        <button className="border rounded-full mr-2 p-1">OPC 7</button>
        <button className="border rounded-full mr-2 p-1">OPC</button>
      </div>

      <div className="flex flex-col mt-3">
        <p>Pergunta de múltipla escolha?</p>
        <label htmlFor="op1">OPC 1</label>
        <input type="checkbox" name="op1" id="op1" />
        <input type="checkbox" name="op2" id="op2" />
        <label htmlFor="op2">OPC 2</label>
        <input type="checkbox" name="op3" id="op3" />
        <label htmlFor="op3">OPC 3</label>
        <input type="checkbox" name="op4" id="op4" />
        <label htmlFor="op4">OPC 4</label>
        <input type="checkbox" name="op5" id="op5" />
        <label htmlFor="op5">OPC 5</label>
        <input type="checkbox" name="op6" id="op6" />
        <label htmlFor="op6">OPC 6</label>
        <input type="checkbox" name="op7" id="op7" />
        <label htmlFor="op7">OPC 7</label>
        <input type="checkbox" name="op8" id="op8" />
        <label htmlFor="op8">OPC 8</label>
        <input type="checkbox" name="op9" id="op9" />
        <label htmlFor="op9">OPC 9</label>
        <input type="checkbox" name="op10" id="op10" />
        <label htmlFor="op10">OPC 10</label>
      </div>
      <p className="mt-3">Pergunta de Texto?</p>
      <textarea
        name=""
        id=""
        cols={70}
        rows={12}
        placeholder="Digite aqui..."
        className="border rounded-md"
      ></textarea>
      <p className="mt-3">Pergunta de Texto?</p>
      <textarea
        name=""
        id=""
        cols={70}
        rows={12}
        placeholder="Digite aqui..."
        className="border rounded-md"
      ></textarea>
      <input
        type="button"
        value="Enviar"
        className="m-3 bg-yellow-400 pb-3 pt-3 pl-16 pr-16 rounded-full text-center"
      />
    </div>
  );
};

export default MainContainer;
