import React from "react";

/**
 * 未完了のTODOブロックのhtmlを生成
 * @param {Object} props propsオブジェクト
 * @param {string} todos 未完了TODOリストのuseState
 * @param {function} onClickComplete 完了ボタンのonclickイベントで発火させるfunction
 * @param {function} onClickDelete 削除ボタンのonclickイベントで発火させるfunction
 * @return {string} 未完了のTODOブロックのhtml
 */
export const IncompleteTodos = (props) => {
  // 分割代入
  const { todos, onClickComplete, onClickDelete } = props;

  return (
    <div className="incomplete-area">
      <p className="title">未完了のTODO</p>
      <ul>
        {/** 未完了TODOリスト分繰り返し */}
        {todos.map((todo, index) => {
          return (
            <div key={todo} className="list-row">
              <li>{todo}</li>
              <button onClick={() => onClickComplete(index)}>完了</button>
              <button onClick={() => onClickDelete(index)}>削除</button>
            </div>
          );
        })}
      </ul>
    </div>
  );
};
