export const CONTRACT_ADDRESS = {
  DAI: "0x0ab177788bB14057Ea20889D82646aA5FF6f3965",
  TenXBank: "0xC1f7b689bbffb7BA7DCEffE75122aac3276A151d",
  Multicall: "0x461D1939953109D58A43043e38771C54b97b4142",
};

export const CONTRACT_NAMES = Object.entries(CONTRACT_ADDRESS).reduce<
  Record<string, string>
>((prev, cur) => {
  const [name, address]: any = cur;
  prev[address] = name;
  return prev;
}, {});

export const ADDRESS_LIST: Record<string, string> = {
  ...CONTRACT_ADDRESS,
  ...Object.values(CONTRACT_ADDRESS).reduce<Record<string, string>>(
    (prev, cur: any) => {
      prev[cur] = cur;
      return prev;
    },
    {}
  ),
};
