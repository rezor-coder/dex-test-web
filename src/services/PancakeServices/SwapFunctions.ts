import { store } from "../../app/store";
import { slicedValue } from "../../utils/helpers";
import { calculateGasPrice } from "../contractServices/PancakeContractServices";
import { callSendMethod } from "../contractServices/contractMethods";

let hundred = 100;
const localeStringFunction = (value: any) => {
  return value?.toLocaleString("fullwide", {
    useGrouping: !1,
  });
};

const swapTokensForExactGTH = async (data: any) => {
  const {
    walletAddress,
    amountOut,
    amountInMax,
    path,
    to,
    deadLine,
    slippageTolerance,
    walletProvider,
  } = data;
  const list = store.getState()?.user?.contractDetails;
  const routerAddress = list?.panCakeSwap?.address;
  try {
    let amountInMaxWithSlippageTolerance =
      (amountInMax / hundred) * slippageTolerance == 0
        ? amountInMax
        : localeStringFunction(
          slicedValue(
            localeStringFunction((amountInMax / hundred) * slippageTolerance)
          ) + Number(amountInMax)
        );
    const gasPrice = await calculateGasPrice(walletProvider);

    return await callSendMethod(
      "rezorSwapTokensForExactETH",
      [amountOut, amountInMaxWithSlippageTolerance, path, to, deadLine],
      walletAddress,
      "pancakeSwap",
      undefined,
      routerAddress,
      walletProvider,
      gasPrice
    );
  } catch (error) {
    return error;
    //   errorHelperContract(error, "send", "rezorSwapTokensForExactETH");
  }
};
const swapExactTokensForGTH = async (data: any) => {
  const {
    walletAddress,
    amountIn,
    amountOutMin,
    path,
    to,
    deadLine,
    slippageTolerance,
    walletProvider,
  } = data;
  const list = store.getState()?.user?.contractDetails;
  const routerAddress = list?.panCakeSwap?.address;
  try {
    let amountOutMinWithSlippageTolerance =
      (amountOutMin / hundred) * slippageTolerance == 0
        ? amountOutMin
        : localeStringFunction(
          amountOutMin -
          Number(
            slicedValue(
              localeStringFunction(
                (amountOutMin / hundred) * slippageTolerance
              )
            )
          )
        );
    const gasPrice = await calculateGasPrice(walletProvider);

    return await callSendMethod(
      "rezorSwapExactTokensForETH",
      [amountIn, amountOutMinWithSlippageTolerance, path, to, deadLine],
      walletAddress,
      "pancakeSwap",
      undefined,
      routerAddress,
      walletProvider,
      gasPrice
    );
  } catch (error: any) {
    if (error?.code !== 5000) {
      if (error?.code !== 4001) {
        let taxPercentage = 50;
        try {
          let amountOutMinWithSlippageTolerance = localeStringFunction(
            amountOutMin -
            Number(
              slicedValue(
                localeStringFunction((amountOutMin / hundred) * taxPercentage)
              )
            )
          );
          const gasPrice = await calculateGasPrice(walletProvider);

          return await callSendMethod(
            "rezorSwapExactTokensForETHSupportingFeeOnTransferTokens",
            [amountIn, amountOutMinWithSlippageTolerance, path, to, deadLine],
            walletAddress,
            "pancakeSwap",
            undefined,
            routerAddress,
            walletProvider,
            gasPrice
          );
        } catch (error) {
          return error;

        }
      } else {
        return error;
      }
    } else {
      return error;
    }
  }
};
const swapExactTokensForToken = async (data: any) => {
  const {
    walletAddress,
    amountIn,
    amountOutMin,
    path,
    to,
    deadLine,
    slippageTolerance,
    walletProvider,
  } = data;
  const list = store.getState()?.user?.contractDetails;
  const routerAddress = list?.panCakeSwap?.address;
  try {
    console.log("in try");
    // var amountInput = amountIn - (0.01)*amountIn;

    let amountOutMinWithSlippageTolerance =
      (amountOutMin / hundred) * slippageTolerance == 0
        ? amountOutMin
        : localeStringFunction(
          amountOutMin -
          Number(
            slicedValue(
              localeStringFunction(
                (amountOutMin / hundred) * slippageTolerance
              )
            )
          )
        );


    const gasPrice = await calculateGasPrice(walletProvider);

    return await callSendMethod(
      "rezorSwapExactTokensForTokens",
      [amountIn, 0, path, to, deadLine],
      walletAddress,
      "pancakeSwap",
      undefined,
      routerAddress,
      walletProvider,
      gasPrice
    );
  } catch (error: any) {
    console.log("in catch");

    if (error?.code !== 5000) {
      if (error?.code !== 4001) {
        let taxPercentage = 50;
        // var amountInput = amountIn - (0.01)*amountIn;
        try {
          let amountOutMinWithSlippageTolerance = localeStringFunction(
            amountOutMin -
            Number(
              slicedValue(
                localeStringFunction((amountOutMin / hundred) * taxPercentage)
              )
            )
          );
          const gasPrice = await calculateGasPrice(walletProvider);

          return await callSendMethod(
            "rezorSwapExactTokensForTokensSupportingFeeOnTransferTokens",
            // "rezorSwapExactTokensForTokens",
            [amountIn, amountOutMinWithSlippageTolerance, path, to, deadLine],
            walletAddress,
            "pancakeSwap",
            undefined,
            routerAddress,
            walletProvider,
            gasPrice
          );
        } catch (error) {
          return error;

        }
      } else {
        return error;
      }
    } else {
      return error;
    }
  }
};

//CHECK IT
const swapExactGTHForToken = async (data: any) => {
  const {
    walletAddress,
    amountIn,
    amountOutMin,
    path,
    to,
    deadLine,
    slippageTolerance,
    walletProvider,
  } = data;
  const list = store.getState()?.user?.contractDetails;
  const routerAddress = list?.panCakeSwap?.address;
  console.log("path2", path);

  try {
    let amountOutMinWithSlippageTolerance =
      (amountOutMin / hundred) * slippageTolerance == 0
        ? amountOutMin
        : localeStringFunction(
          amountOutMin -
          Number(
            slicedValue(
              localeStringFunction(
                (amountOutMin / hundred) * slippageTolerance
              )
            )
          )
        );
    const gasPrice = await calculateGasPrice(walletProvider);

    var method = "rezorSwapExactETHForTokens";
    if(path[1] === "0x2111F1f5A8383F27a9f089abB1926dc00eb6beF3" ){
      method = "rezorSwapExactETHForTokensSupportingFeeOnTransferTokens";
    }
    
    return await callSendMethod(
      method,
      [amountOutMinWithSlippageTolerance, path, to, deadLine],
      walletAddress,
      "pancakeSwap",
      amountIn,
      routerAddress,
      walletProvider,
      gasPrice
    );
  } catch (error: any) {
    if (error?.code !== 5000) {
      if (error?.code !== 4001) {
        let taxPercentage = 50;
        try {
          let amountOutMinWithSlippageTolerance = localeStringFunction(
            amountOutMin -
            Number(
              slicedValue(
                localeStringFunction((amountOutMin / hundred) * taxPercentage)
              )
            )
          );
          const gasPrice = await calculateGasPrice(walletProvider);

          return await callSendMethod(
            "rezorSwapExactETHForTokensSupportingFeeOnTransferTokens",
            [amountOutMinWithSlippageTolerance, path, to, deadLine],
            walletAddress,
            "pancakeSwap",
            amountIn,
            routerAddress,
            walletProvider,
            gasPrice
          );
        } catch (error) {
          return error;

        }
      } else {
        return error;
      }
    } else {
      return error;
    }
  }
};

const swapGTHForExactToken = async (data: any) => {
  const {
    walletAddress,
    amountOut,
    amountInMax,
    path,
    to,
    slippageTolerance,
    deadLine,
    walletProvider,
  } = data;
  const list = store.getState()?.user?.contractDetails;
  const routerAddress = list?.panCakeSwap?.address;
  try {
    let amountOutMaxWithSlippageTolerance =
      (amountOut / hundred) * slippageTolerance == 0
        ? amountOut
        : slicedValue(
          localeStringFunction(
            (amountOut / hundred) * slippageTolerance + Number(amountOut)
          )
        );
    const gasPrice = await calculateGasPrice(walletProvider);

    return await callSendMethod(
      "rezorSwapETHForExactTokens",
      [amountOutMaxWithSlippageTolerance, path, to, deadLine],
      walletAddress,
      "pancakeSwap",
      amountInMax,
      routerAddress,
      walletProvider,
      gasPrice
    );
  } catch (error) {
    return error;
  }
};
const swapTokensForExactToken = async (data: any) => {
  const {
    walletAddress,
    amountOut,
    amountInMax,
    path,
    to,
    deadLine,
    slippageTolerance,
    walletProvider,
  } = data;
  const list = store.getState()?.user?.contractDetails;
  const routerAddress = list?.panCakeSwap?.address;
  try {
    let amountInMaxWithSlippageTolerance =
      (amountInMax / hundred) * slippageTolerance == 0
        ? amountInMax
        : localeStringFunction(
          slicedValue(
            localeStringFunction((amountInMax / hundred) * slippageTolerance)
          ) + Number(amountInMax)
        );
    const gasPrice = await calculateGasPrice(walletProvider);

    return await callSendMethod(
      "rezorSwapTokensForExactTokens",
      [amountOut, amountInMaxWithSlippageTolerance, path, to, deadLine],
      walletAddress,
      "pancakeSwap",
      undefined,
      routerAddress,
      walletProvider,
      gasPrice
    );
  } catch (error: any) {
    console.log("error", error, error?.code, error?.code !== 5000);
    if (error?.code !== 5000) {
      if (error?.code !== 4001) {
        let taxPercentage = 50;
        try {
          let amountOutMinWithSlippageTolerance = localeStringFunction(
            Number(amountInMax) +
            slicedValue(
              localeStringFunction((amountInMax / hundred) * taxPercentage)
            )
          );
          const gasPrice = await calculateGasPrice(walletProvider);

          return await callSendMethod(
            "rezorSwapExactTokensForTokensSupportingFeeOnTransferTokens",
            [amountOut, amountOutMinWithSlippageTolerance, path, to, deadLine],
            walletAddress,
            "pancakeSwap",
            undefined,
            routerAddress,
            walletProvider,
            gasPrice

          );
        } catch (error) {
          return error;
        }
      } else {
        return error;
      }
    } else {
      return error;
    }
  }
};

const swapTokensOrExactTokensWithTokens = async (data: any) => {
  const {
    input1,
    input2,
    walletAddress,
    tokenOneAddress,
    tokenTwoAddress,
    selectedField,
    deadLine,
    slippageTolerance,
    walletProvider,
  } = data;
  let path = [tokenOneAddress, tokenTwoAddress];
  console.log("path", path);

  if (selectedField == "TK1") {
    const data = {
      walletAddress,
      amountIn: input1,
      amountOutMin: input2,
      path,
      to: walletAddress,
      deadLine,
      slippageTolerance,
      walletProvider,
    };
    const res: any = await swapExactTokensForToken(data);
    return res;
  } else {
    const data = {
      walletAddress,
      amountOut: input2,
      amountInMax: input1,
      path,
      to: walletAddress,
      deadLine,
      slippageTolerance,
      walletProvider,
    };

    const res: any = await swapTokensForExactToken(data);
    return res;
  }
};

const swapTokensOrExactTokensWithGTH = async (data: any) => {
  const {
    input1,
    input2,
    walletAddress,
    tokenOneAddress,
    tokenTwoAddress,
    selectedField,
    deadLine,
    slippageTolerance,
    walletProvider,
  } = data;
  let path = [tokenOneAddress, tokenTwoAddress];
  if (selectedField == "TK1") {
    const data = {
      walletAddress,
      amountIn: input1,
      amountOutMin: input2,
      path,
      to: walletAddress,
      deadLine,
      slippageTolerance,
      walletProvider,
    };

    const res: any = await swapExactTokensForGTH(data);
    return res;
  } else {
    const data = {
      walletAddress,
      amountOut: input2,
      amountInMax: input1,
      path,
      to: walletAddress,
      deadLine,
      slippageTolerance,
      walletProvider,
    };

    const res: any = await swapTokensForExactGTH(data);
    return res;
  }
};

const swapGTHOrExactGTHWithTokens = async (data: any) => {
  const {
    input1,
    input2,
    walletAddress,
    tokenOneAddress,
    tokenTwoAddress,
    selectedField,
    deadLine,
    slippageTolerance,
    walletProvider,
  } = data;
  let path = [tokenOneAddress, tokenTwoAddress];
  if (selectedField == "TK1") {
    const data = {
      walletAddress,
      amountIn: input1,
      amountOutMin: input2,
      path,
      to: walletAddress,
      deadLine,
      slippageTolerance,
      walletProvider,
    };
    console.log(path, "path1");

    const res: any = await swapExactGTHForToken(data);
    return res;
  } else {

    var inpt = input1;
    // var value:any= BigInt(10000);
    // var per:any= BigInt(100);
    // var inpt:any = Number(inpt1) * Number((value+per)/value);

    console.log(inpt,"inpt");
    

    const data = {
      walletAddress,
      amountOut: input2,
      amountInMax: inpt,
      path,
      to: walletAddress,
      deadLine,
      slippageTolerance,
      walletProvider,
    };
    const res: any = await swapGTHForExactToken(data);
    return res;
  }
};

export {
  swapTokensOrExactTokensWithTokens,
  swapTokensOrExactTokensWithGTH,
  swapGTHOrExactGTHWithTokens,
};
