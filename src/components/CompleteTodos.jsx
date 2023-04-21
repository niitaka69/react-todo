import React from "react";

/**
 * 完了のTODOブロックのhtmlを生成
 * @param {Object} props propsオブジェクト
 * @param {string} todos 完了TODOリストのuseState
 * @param {functkon} onClickBack 戻すボタンのonclickイベントで発火させるfunction
 */
export const CompleteTodos = (props) => {
  // 分割代入
  const { todos, onClickBack } = props;

  return (
    <div className="complete-area">
      <p className="title">完了のTODO</p>
      <ul>
        {/** 完了TODOリスト分繰り返し */}
        {todos.map((todo, index) => {
          return (
            <div key={todo} className="list-row">
              <li>{todo}</li>
              <button
                onClick={() => {
                  onClickBack(index);
                }}
              >
                戻す
              </button>
            </div>
          );
        })}
      </ul>
    </div>
  );
};
