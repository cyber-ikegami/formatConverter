import React, { useState } from 'react';
import styled from 'styled-components';
import StylesUtil from './stylesUtil';
import SystemUtil from './systemUtil';

const App = () => {
  const [formatValue, setFormatValue] = useState<string>('');
  const [columnReplaseValue, setColumnReplaseValue] = useState<string>('\\t');
  const [recordReplaseValue, setRecordReplaseValue] = useState<string>('\\n');
  const [baseValue, setBaseValue] = useState<string>('');
  const [showValue, setShowValue] = useState<string>('');
  const [isDialogDisplay, setIsDialogDisplay] = useState<boolean>(false);

  // 変換ボタン押下時の処理
  const convert = () => {
    const recordRegExpValue = new RegExp(`${recordReplaseValue}`);
    const columnRegExpValue = new RegExp(`${columnReplaseValue}`);

    const lines = baseValue.split(recordRegExpValue);
    const columnNames = lines[0].split(columnRegExpValue);
    let result = '';

    lines.forEach((line, i) => {
      if (i > 0) {
        const splitLine = line.split(columnRegExpValue);
        let base = formatValue;

        columnNames.forEach((columnName, j) => {
          let arg = `\\$${columnName}`;
          base = base.replace(eval(`/${arg}/g`), splitLine[j]);
        })
        result = `${result}${base}\n`;
      }
    })
    setShowValue(result);
  };

  // コピーボタン押下時の処理
  const copy = () => {
    navigator.clipboard.writeText(showValue);
    setIsDialogDisplay(true);

    // 3秒たったらダイアログを非表示に戻す
    setTimeout((() => {
      setIsDialogDisplay(false);
    }).bind(this), 3000);
  }

  return (
    <>
      {/* 左エリア */}
      <_Form>
        <_CopyDialog isDisplay={isDialogDisplay}>クリップボードにコピーしました。</_CopyDialog>
        <_FormFrame>
          <_ItemName>■フォーマット</_ItemName>
          <_FormatTextArea>
            <textarea value={formatValue} onChange={(e) => {
              setFormatValue(e.target.value);
            }} />
          </_FormatTextArea>
          <_TextArea>
            <span>■列区切り文字:</span>
            <input value={columnReplaseValue} onChange={(e) => {
              setColumnReplaseValue(e.target.value)
            }}></input>
          </_TextArea>
          <_TextArea>
            <span>■行区切り文字:</span>
            <input value={recordReplaseValue} onChange={(e) => {
              setRecordReplaseValue(e.target.value)
            }}></input>
          </_TextArea>
          <_ItemName>■ベーステキスト</_ItemName>
          <_BaseTextArea>
            <textarea value={baseValue} onChange={(e) => {
              setBaseValue(e.target.value);
            }} />
          </_BaseTextArea>
        </_FormFrame>
      </_Form>

      {/* 中央エリア */}
      <_ButtonsArea>
        <_Buttons isDisable={formatValue != '' && baseValue != ''}>
          <button onClick={() => {
            convert();
          }}>変換</button>
        </_Buttons>
        <_Buttons isDisable={showValue != ''}>
          <button onClick={() => {
            copy();
          }}>コピー</button>
        </_Buttons>
      </_ButtonsArea>

      {/* 右エリア */}
      <_Form>
        <_FormFrame>
          <_ItemName>■出力結果</_ItemName>
          <_ResultTextArea>
            <textarea value={showValue} onChange={(e) => { }} />
          </_ResultTextArea>
        </_FormFrame>
      </_Form>
    </>
  );
}

export default App;

// フォーム
const _Form = styled.div`
  background-color: #97eeee;
  display: inline-block;
  vertical-align: top;
  width: calc(50% - 40px);
  grid-template-columns: minmax(${SystemUtil.FORM_MIN_WIDTH}px, 100%)1fr 1fr;
  overflow-x: auto;
  overflow-y: hidden;
  height: 100%;
  box-sizing: border-box;
  padding: ${SystemUtil.MARGIN_MIN_SIZE}px;
`;

// フォーム（枠）
const _FormFrame = styled.div`
  width: 100%;
  height: 100%;
  box-sizing: border-box;
  border: 2px solid #ffffff83;
`;

// 項目名ラベル
const _ItemName = styled.div`
  box-sizing: border-box; 
  margin-left: ${SystemUtil.MARGIN_MIN_SIZE}px;
  margin-bottom: ${SystemUtil.MARGIN_MIN_SIZE}px;
  width: calc(100% - 100px);
  height: ${SystemUtil.ITEM_NAME_HEIGHT}px;
  font-size: ${SystemUtil.FONT_SIZE}px;
  font-weight: bold;
`;

// フォーマットテキストエリア
const _FormatTextArea = styled.div`
  width: 100%;
  height: ${SystemUtil.FORMAT_TEXT_AREA_HEIGHT}px;
  box-sizing: border-box;
  & textarea{
    resize: none;
    margin-left: ${SystemUtil.MARGIN_MAX_SIZE}px;
    margin-bottom: ${SystemUtil.MARGIN_MAX_SIZE}px;
    width: calc(100% - 20px);
    height: 200px;
    box-sizing: border-box;
  }
`;

// 区切り文字テキストエリア
const _TextArea = styled.div` 
  width: 50%;
  height: ${SystemUtil.TEXT_BOX_AREA_HEIGHT}px;
  display: inline-block;
  box-sizing: border-box;
  & span{
    display: inline-block;
    box-sizing: border-box; 
    margin-left: ${SystemUtil.MARGIN_MIN_SIZE}px;
    margin-bottom: ${SystemUtil.MARGIN_MIN_SIZE}px;
    height: ${SystemUtil.TEXT_BOX_HEIGHT}px;
    font-size: ${SystemUtil.FONT_SIZE}px;
    font-weight: bold;
  }
  & input{
    display: inline-block;
    resize: none;
    margin-left: ${SystemUtil.MARGIN_MAX_SIZE}px;
    margin-bottom: ${SystemUtil.MARGIN_MIN_SIZE}px;
    height: ${SystemUtil.TEXT_BOX_HEIGHT}px;
    width: ${SystemUtil.TEXT_BOX_WIDTH}px;
    box-sizing: border-box;
 }
`;

// ベーステキストエリア
const _BaseTextArea = styled.div`
  width: 100%;
  height: calc(100% - 260px);
  & textarea{
    resize: none;
    margin-left: ${SystemUtil.MARGIN_MAX_SIZE}px;
    margin-bottom: ${SystemUtil.MARGIN_MAX_SIZE}px;
    width: calc(100% - 20px);
    height: calc(100% - 30px);
    box-sizing: border-box; 
  }
`;

// 出力結果テキストエリア
const _ResultTextArea = styled.div`
  width: 100%;
  height: 100%;
  box-sizing: border-box;
  & textarea{
    resize: none;
    margin-left: ${SystemUtil.MARGIN_MAX_SIZE}px;
    margin-bottom: ${SystemUtil.MARGIN_MAX_SIZE}px;
    width: calc(100% - 20px);
    height: calc(100% - 30px);
    box-sizing: border-box; 
  }
`;

// 中央エリア
const _ButtonsArea = styled.div`
  background-color: #97eeee;
  vertical-align: top;
  width: 80px;
  height: 100%;
  display: inline-flex;
  flex-flow: column;
  justify-content: center;
  box-sizing: border-box;
`;

// ボタン
const _Buttons = styled.div<{
  isDisable: boolean;
}>`
  & button {
    ${props => props.isDisable ? '' : StylesUtil.IS_DISABLE}
    width: 100%;
    margin-bottom: 20px;
  }
`;

// コピーしましたダイアログ
const _CopyDialog = styled.div<{
  isDisplay: boolean;
}>`
  display: ${props => props.isDisplay ? 'block' : 'none'};
  position: absolute;
  font-size: ${SystemUtil.FONT_SIZE}px;
  background-color: #97c7ee;
  line-height: 40px;
  width: 250px;
  height: 40px;
  top: 52%;
  left: 52%;
  user-select: none;
  
  // 3秒かけて透明にする
  animation: fadein-keyframes 3s ease 0s forwards;
  @keyframes fadein-keyframes {
    0% {
      opacity: 1;
    }
    100% {
      opacity: 0;
    }
  }
`;
