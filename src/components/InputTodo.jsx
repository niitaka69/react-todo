import React from "react";

const style = {
  backgroundColor: "#c1ffff",
  width: "400px",
  height: "30px",
  padding: "8px",
  margin: "8px",
  borderRadius: "8px"
};

/**
 * TODO入力ブロックのhtmlを生成
 * @function
 * @param {Object} props propsオブジェクト
 * @param {string} todoText TODO入力値のuseState
 * @param {function} onChange TODOテキストボックスのonChangeイベントで発火させるfunction
 * @param {function} onClick 追加ボタンのonclickイベントで発火させるfunction
 * @param {boolean} disabled TODOテキストボックス、追加ボタンのdisabledフラグ
 * @return {string} TODO入力ブロックのhtml
 */
export const InputTodo = (props) => {
  // 分割代入
  const { todoText, onChange, onClick, disabled } = props;

  return (
    <div style={style}>
      <input
        disabled={disabled}
        placeholder="TODOを入力"
        value={todoText}
        onChange={onChange}
      />
      <button disabled={disabled} onClick={onClick}>
        追加
      </button>
    </div>
  );
};
