import React, { useState } from "react";
import { InputTodo } from "./components/InputTodo";
import { IncompleteTodos } from "./components/IncompleteTodos";
import { CompleteTodos } from "./components/CompleteTodos";

import "./styles.css";

/**
 * メイン処理
 */
export const App = () => {
  // useStateの定義
  const [todoText, setTodoText] = useState("");
  const [incompleteTodos, setIncompleteTodos] = useState([]);
  const [completeTodos, setCompleteTodos] = useState([]);

  // TODOテキストボックス入力時に対応するuseStateと値を同期させる
  const onChangeTodoText = (event) => setTodoText(event.target.value);

  /**
   * TODOの追加ボタン押下時の処理
   * @function
   */
  const onClickAdd = () => {
    // TODO入力値が空の場合、何もしない
    if (todoText === "") return;

    // 現在の未完了TODOリストの末尾にTODO入力値を追加する
    const newTodos = [...incompleteTodos, todoText];

    // useStateの更新
    setIncompleteTodos(newTodos);

    // TODOテキストボックスを空値に更新
    setTodoText("");
  };

  /**
   * 未完了TODOリストの削除ボタン押下時の処理
   * @function
   * @param {number} index 削除対象のTODOのindex
   */
  const onClickDelete = (index) => {
    // 現在の未完了TODOリストをコピー
    const newTodos = [...incompleteTodos];

    // 削除対象のTODOをリストから削除
    newTodos.splice(index, 1);

    // useStateの更新
    setIncompleteTodos(newTodos);
  };

  /**
   * 未完了TODOリストの完了ボタン押下時の処理
   * @param {number} index 完了対象のTODOのindex
   */
  const onClickComplete = (index) => {
    // 未完了TODOリストから対象のTODOを削除
    const newIncompleteTodos = [...incompleteTodos];
    newIncompleteTodos.splice(index, 1);

    // 完了TODOリストの末尾にTODOを追加
    const newCompleteTodos = [...completeTodos, incompleteTodos[index]];

    // useStateの更新
    setIncompleteTodos(newIncompleteTodos);
    setCompleteTodos(newCompleteTodos);
  };

  /**
   * 完了TODOリストの戻すボタン押下時の処理
   * @param {number} index 戻す対象のTODOのindex
   */
  const onClickBack = (index) => {
    // 完了TODOリストから対象のTODOを削除
    const newCompleteTodos = [...completeTodos];
    newCompleteTodos.splice(index, 1);

    // 未完了TODOリストの末尾にTODOを追加
    const newIncompleteTodos = [...incompleteTodos, completeTodos[index]];

    // useStateの更新
    setCompleteTodos(newCompleteTodos);
    setIncompleteTodos(newIncompleteTodos);
  };

  /**
   * 未完了TODOリストが上限件数に達しているか
   * @function
   * @return {boolean} true:上限件数である false:上限件数ではない
   */
  const isMaxIncompleteTodos = () => {
    return incompleteTodos.length >= 5;
  };

  /**
   * メインのHTML生成処理
   */
  return (
    <>
      {/** TODO入力ブロック */}
      <InputTodo
        todoText={todoText}
        onChange={onChangeTodoText}
        onClick={onClickAdd}
        disabled={isMaxIncompleteTodos()}
      />
      {/** メッセージ表示 */}
      {isMaxIncompleteTodos() && (
        <p style={{ color: "red" }}>
          登録できるTODOは5個までです。早く消化しましょう!
        </p>
      )}
      {/** 未完了のTODOブロック */}
      <IncompleteTodos
        todos={incompleteTodos}
        onClickComplete={onClickComplete}
        onClickDelete={onClickDelete}
      />
      {/** 完了のTODOブロック */}
      <CompleteTodos todos={completeTodos} onClickBack={onClickBack} />
    </>
  );
};
