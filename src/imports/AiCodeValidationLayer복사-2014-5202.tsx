import svgPaths from "./svg-sy0sxwkzhv";

function Heading1() {
  return (
    <div className="h-[36px] relative shrink-0 w-full" data-name="Heading 2">
      <p className="absolute font-['Arial:Bold',sans-serif] leading-[36px] left-0 not-italic text-[#1e293b] text-[30px] top-[-3px] whitespace-pre">Risk Analysis</p>
    </div>
  );
}

function Paragraph() {
  return (
    <div className="h-[24px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Arial:Regular',sans-serif] leading-[24px] left-0 not-italic text-[#475569] text-[16px] top-[-1.67px] whitespace-pre">Detailed analysis of identified risks with line-by-line mapping</p>
    </div>
  );
}

function Container() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] h-[68px] items-start relative shrink-0 w-full" data-name="Container">
      <Heading1 />
      <Paragraph />
    </div>
  );
}

function Text() {
  return (
    <div className="h-[20px] relative shrink-0 w-[52.5px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Arial:Regular',sans-serif] leading-[20px] left-0 not-italic text-[#475569] text-[14px] top-[-1.33px] whitespace-pre">Severity:</p>
      </div>
    </div>
  );
}

function Option() {
  return <div className="h-0 shrink-0 w-full" data-name="Option" />;
}

function Dropdown() {
  return (
    <div className="bg-[#f8fbff] flex-[1_0_0] h-[33.333px] min-h-px min-w-px relative rounded-[10px]" data-name="Dropdown">
      <div aria-hidden="true" className="absolute border-[#dbeafe] border-[0.667px] border-solid inset-0 pointer-events-none rounded-[10px]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pb-[0.667px] pl-[-572.167px] pr-[670.167px] pt-[-333.333px] relative size-full">
        {[...Array(5).keys()].map((_, i) => (
          <Option key={i} />
        ))}
      </div>
    </div>
  );
}

function Container1() {
  return (
    <div className="absolute content-stretch flex gap-[8px] h-[33.333px] items-center left-0 top-0 w-[158.5px]" data-name="Container">
      <Text />
      <Dropdown />
    </div>
  );
}

function Text1() {
  return (
    <div className="h-[20px] relative shrink-0 w-[32.5px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Arial:Regular',sans-serif] leading-[20px] left-0 not-italic text-[#475569] text-[14px] top-[-1.33px] whitespace-pre">Type:</p>
      </div>
    </div>
  );
}

function Option1() {
  return <div className="h-0 shrink-0 w-full" data-name="Option" />;
}

function Dropdown1() {
  return (
    <div className="bg-[#f8fbff] flex-[1_0_0] h-[33.333px] min-h-px min-w-px relative rounded-[10px]" data-name="Dropdown">
      <div aria-hidden="true" className="absolute border-[#dbeafe] border-[0.667px] border-solid inset-0 pointer-events-none rounded-[10px]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pb-[0.667px] pl-[-722.667px] pr-[868.667px] pt-[-333.333px] relative size-full">
        {[...Array(5).keys()].map((_, i) => (
          <Option1 key={i} />
        ))}
      </div>
    </div>
  );
}

function Container2() {
  return (
    <div className="absolute content-stretch flex gap-[8px] h-[33.333px] items-center left-[170.5px] top-0 w-[186.5px]" data-name="Container">
      <Text1 />
      <Dropdown1 />
    </div>
  );
}

function Container3() {
  return (
    <div className="absolute h-[33.333px] left-[1021.01px] top-0 w-[129.656px]" data-name="Container">
      <p className="absolute font-['Arial:Regular',sans-serif] leading-[20px] left-0 not-italic text-[#475569] text-[14px] top-[-1.33px] w-[130px] whitespace-pre-wrap">Showing 8 of 8 risks</p>
    </div>
  );
}

function Container4() {
  return (
    <div className="h-[33.333px] relative shrink-0 w-full" data-name="Container">
      <Container1 />
      <Container2 />
      <Container3 />
    </div>
  );
}

function Icon() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="Icon">
          <path d={svgPaths.p1306cbc0} id="Vector" stroke="var(--stroke-0, #93C5FD)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          <path d={svgPaths.p2b84ce80} id="Vector_2" stroke="var(--stroke-0, #93C5FD)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          <path d={svgPaths.p3b927d80} id="Vector_3" stroke="var(--stroke-0, #93C5FD)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
        </g>
      </svg>
    </div>
  );
}

function Heading2() {
  return (
    <div className="h-[28px] relative shrink-0 w-[227.542px]" data-name="Heading 3">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Arial:Bold',sans-serif] leading-[28px] left-0 not-italic text-[#1e293b] text-[20px] top-[-2.33px] whitespace-pre">Risk Map (Line-by-Line)</p>
      </div>
    </div>
  );
}

function Container5() {
  return (
    <div className="content-stretch flex gap-[8px] h-[28px] items-center relative shrink-0 w-full" data-name="Container">
      <Icon />
      <Heading2 />
    </div>
  );
}

function Text2() {
  return (
    <div className="h-[40px] relative shrink-0 w-[32px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Consolas:Regular',sans-serif] leading-[20px] left-[32.3px] not-italic text-[#94a3b8] text-[14px] text-right top-0 translate-x-[-100%] whitespace-pre">1</p>
      </div>
    </div>
  );
}

function Text3() {
  return (
    <div className="h-[40px] relative shrink-0 w-[351.865px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Consolas:Regular',sans-serif] leading-[20px] left-0 not-italic text-[#1e293b] text-[14px] top-0 w-[347px] whitespace-pre-wrap">{`async function processPayment(userId, amount) {`}</p>
      </div>
    </div>
  );
}

function Container6() {
  return (
    <div className="bg-[#fef3c7] h-[20px] relative rounded-[4px] shrink-0 w-[68.802px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Consolas:Bold',sans-serif] leading-[16px] left-[8px] not-italic text-[#d97706] text-[12px] top-[1.67px] w-[53px] whitespace-pre-wrap">2 issues</p>
      </div>
    </div>
  );
}

function Container7() {
  return (
    <div className="bg-[#fef3c7] h-[48px] relative rounded-[4px] shrink-0 w-full" data-name="Container">
      <div aria-hidden="true" className="absolute border-[#f59e0b] border-[0px_0px_0px_4px] border-solid inset-0 pointer-events-none rounded-[4px]" />
      <div className="content-stretch flex gap-[12px] items-start pb-0 pl-[12px] pr-0 pt-[4px] relative size-full">
        <Text2 />
        <Text3 />
        <Container6 />
      </div>
    </div>
  );
}

function Text4() {
  return (
    <div className="h-[40px] relative shrink-0 w-[32px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Consolas:Regular',sans-serif] leading-[20px] left-[32.3px] not-italic text-[#94a3b8] text-[14px] text-right top-0 translate-x-[-100%] whitespace-pre">2</p>
      </div>
    </div>
  );
}

function Text5() {
  return (
    <div className="h-[40px] relative shrink-0 w-[351.865px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Consolas:Regular',sans-serif] leading-[20px] left-0 not-italic text-[#1e293b] text-[14px] top-0 w-[324px] whitespace-pre-wrap">{`const user = await db.query("SELECT * FROM users WHERE id = " + userId);`}</p>
      </div>
    </div>
  );
}

function Container8() {
  return (
    <div className="h-[20px] relative rounded-[4px] shrink-0 w-[68.802px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Consolas:Bold',sans-serif] leading-[16px] left-[8px] not-italic text-[#dc2626] text-[12px] top-[1.67px] w-[53px] whitespace-pre-wrap">2 issues</p>
      </div>
    </div>
  );
}

function Container9() {
  return (
    <div className="bg-[#fee2e2] h-[48px] relative rounded-[4px] shrink-0 w-full" data-name="Container">
      <div aria-hidden="true" className="absolute border-[#dc2626] border-[0px_0px_0px_4px] border-solid inset-0 pointer-events-none rounded-[4px]" />
      <div className="content-stretch flex gap-[12px] items-start pb-0 pl-[12px] pr-0 pt-[4px] relative size-full">
        <Text4 />
        <Text5 />
        <Container8 />
      </div>
    </div>
  );
}

function Text6() {
  return (
    <div className="h-[20px] relative shrink-0 w-[32px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Consolas:Regular',sans-serif] leading-[20px] left-[32.3px] not-italic text-[#94a3b8] text-[14px] text-right top-0 translate-x-[-100%] whitespace-pre">3</p>
      </div>
    </div>
  );
}

function Text7() {
  return <div className="h-[20px] shrink-0 w-0" data-name="Text" />;
}

function Container10() {
  return (
    <div className="h-[28px] relative rounded-[4px] shrink-0 w-full" data-name="Container">
      <div className="content-stretch flex gap-[12px] items-start pb-0 pl-[8px] pr-0 pt-[4px] relative size-full">
        <Text6 />
        <Text7 />
      </div>
    </div>
  );
}

function Text8() {
  return (
    <div className="h-[20px] relative shrink-0 w-[32px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Consolas:Regular',sans-serif] leading-[20px] left-[32.3px] not-italic text-[#94a3b8] text-[14px] text-right top-0 translate-x-[-100%] whitespace-pre">4</p>
      </div>
    </div>
  );
}

function Text9() {
  return (
    <div className="h-[20px] relative shrink-0 w-[223.229px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Consolas:Regular',sans-serif] leading-[20px] left-0 not-italic text-[#1e293b] text-[14px] top-0 whitespace-pre">{`if (user.balance >= amount) {`}</p>
      </div>
    </div>
  );
}

function Container11() {
  return (
    <div className="bg-[#fef3c7] h-[20px] relative rounded-[4px] shrink-0 w-[68.802px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Consolas:Bold',sans-serif] leading-[16px] left-[8px] not-italic text-[#d97706] text-[12px] top-[1.67px] w-[53px] whitespace-pre-wrap">2 issues</p>
      </div>
    </div>
  );
}

function Container12() {
  return (
    <div className="bg-[#fef3c7] h-[28px] relative rounded-[4px] shrink-0 w-full" data-name="Container">
      <div aria-hidden="true" className="absolute border-[#f59e0b] border-[0px_0px_0px_4px] border-solid inset-0 pointer-events-none rounded-[4px]" />
      <div className="content-stretch flex gap-[12px] items-start pb-0 pl-[12px] pr-0 pt-[4px] relative size-full">
        <Text8 />
        <Text9 />
        <Container11 />
      </div>
    </div>
  );
}

function Text10() {
  return (
    <div className="h-[20px] relative shrink-0 w-[32px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Consolas:Regular',sans-serif] leading-[20px] left-[32.3px] not-italic text-[#94a3b8] text-[14px] text-right top-0 translate-x-[-100%] whitespace-pre">5</p>
      </div>
    </div>
  );
}

function Text11() {
  return (
    <div className="h-[20px] relative shrink-0 w-[177.042px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Consolas:Regular',sans-serif] leading-[20px] left-0 not-italic text-[#1e293b] text-[14px] top-0 whitespace-pre">user.balance -= amount;</p>
      </div>
    </div>
  );
}

function Container13() {
  return (
    <div className="h-[20px] relative rounded-[4px] shrink-0 w-[62.198px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Consolas:Bold',sans-serif] leading-[16px] left-[8px] not-italic text-[#dc2626] text-[12px] top-[1.67px] w-[47px] whitespace-pre-wrap">1 issue</p>
      </div>
    </div>
  );
}

function Container14() {
  return (
    <div className="bg-[#fee2e2] h-[28px] relative rounded-[4px] shrink-0 w-full" data-name="Container">
      <div aria-hidden="true" className="absolute border-[#dc2626] border-[0px_0px_0px_4px] border-solid inset-0 pointer-events-none rounded-[4px]" />
      <div className="content-stretch flex gap-[12px] items-start pb-0 pl-[12px] pr-0 pt-[4px] relative size-full">
        <Text10 />
        <Text11 />
        <Container13 />
      </div>
    </div>
  );
}

function Text12() {
  return (
    <div className="h-[40px] relative shrink-0 w-[32px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Consolas:Regular',sans-serif] leading-[20px] left-[32.3px] not-italic text-[#94a3b8] text-[14px] text-right top-0 translate-x-[-100%] whitespace-pre">6</p>
      </div>
    </div>
  );
}

function Text13() {
  return (
    <div className="h-[40px] relative shrink-0 w-[358.469px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Consolas:Regular',sans-serif] leading-[20px] left-0 not-italic text-[#1e293b] text-[14px] top-0 w-[308px] whitespace-pre-wrap">{`db.query("UPDATE users SET balance = " + user.balance);`}</p>
      </div>
    </div>
  );
}

function Container15() {
  return (
    <div className="bg-[#fef3c7] h-[20px] relative rounded-[4px] shrink-0 w-[62.198px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Consolas:Bold',sans-serif] leading-[16px] left-[8px] not-italic text-[#d97706] text-[12px] top-[1.67px] w-[47px] whitespace-pre-wrap">1 issue</p>
      </div>
    </div>
  );
}

function Container16() {
  return (
    <div className="bg-[#fef3c7] h-[48px] relative rounded-[4px] shrink-0 w-full" data-name="Container">
      <div aria-hidden="true" className="absolute border-[#f59e0b] border-[0px_0px_0px_4px] border-solid inset-0 pointer-events-none rounded-[4px]" />
      <div className="content-stretch flex gap-[12px] items-start pb-0 pl-[12px] pr-0 pt-[4px] relative size-full">
        <Text12 />
        <Text13 />
        <Container15 />
      </div>
    </div>
  );
}

function Text14() {
  return (
    <div className="h-[20px] relative shrink-0 w-[32px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Consolas:Regular',sans-serif] leading-[20px] left-[32.3px] not-italic text-[#94a3b8] text-[14px] text-right top-0 translate-x-[-100%] whitespace-pre">7</p>
      </div>
    </div>
  );
}

function Text15() {
  return (
    <div className="h-[20px] relative shrink-0 w-[192.438px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Consolas:Regular',sans-serif] leading-[20px] left-0 not-italic text-[#475569] text-[14px] top-0 whitespace-pre">{`return { success: true };`}</p>
      </div>
    </div>
  );
}

function Container17() {
  return (
    <div className="h-[28px] relative rounded-[4px] shrink-0 w-full" data-name="Container">
      <div className="content-stretch flex gap-[12px] items-start pb-0 pl-[8px] pr-0 pt-[4px] relative size-full">
        <Text14 />
        <Text15 />
      </div>
    </div>
  );
}

function Text16() {
  return (
    <div className="h-[20px] relative shrink-0 w-[32px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Consolas:Regular',sans-serif] leading-[20px] left-[32.3px] not-italic text-[#94a3b8] text-[14px] text-right top-0 translate-x-[-100%] whitespace-pre">8</p>
      </div>
    </div>
  );
}

function Text17() {
  return (
    <div className="h-[20px] relative shrink-0 w-[7.698px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Consolas:Regular',sans-serif] leading-[20px] left-0 not-italic text-[#475569] text-[14px] top-0 whitespace-pre">{`}`}</p>
      </div>
    </div>
  );
}

function Container18() {
  return (
    <div className="h-[28px] relative rounded-[4px] shrink-0 w-full" data-name="Container">
      <div className="content-stretch flex gap-[12px] items-start pb-0 pl-[8px] pr-0 pt-[4px] relative size-full">
        <Text16 />
        <Text17 />
      </div>
    </div>
  );
}

function Text18() {
  return (
    <div className="h-[20px] relative shrink-0 w-[32px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Consolas:Regular',sans-serif] leading-[20px] left-[32.3px] not-italic text-[#94a3b8] text-[14px] text-right top-0 translate-x-[-100%] whitespace-pre">9</p>
      </div>
    </div>
  );
}

function Text19() {
  return <div className="h-[20px] shrink-0 w-0" data-name="Text" />;
}

function Container19() {
  return (
    <div className="h-[28px] relative rounded-[4px] shrink-0 w-full" data-name="Container">
      <div className="content-stretch flex gap-[12px] items-start pb-0 pl-[8px] pr-0 pt-[4px] relative size-full">
        <Text18 />
        <Text19 />
      </div>
    </div>
  );
}

function Text20() {
  return (
    <div className="h-[20px] relative shrink-0 w-[32px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Consolas:Regular',sans-serif] leading-[20px] left-[32.6px] not-italic text-[#94a3b8] text-[14px] text-right top-0 translate-x-[-100%] whitespace-pre">10</p>
      </div>
    </div>
  );
}

function Text21() {
  return (
    <div className="h-[20px] relative shrink-0 w-[200.135px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Consolas:Regular',sans-serif] leading-[20px] left-0 not-italic text-[#475569] text-[14px] top-0 whitespace-pre">{`return { success: false };`}</p>
      </div>
    </div>
  );
}

function Container20() {
  return (
    <div className="h-[28px] relative rounded-[4px] shrink-0 w-full" data-name="Container">
      <div className="content-stretch flex gap-[12px] items-start pb-0 pl-[8px] pr-0 pt-[4px] relative size-full">
        <Text20 />
        <Text21 />
      </div>
    </div>
  );
}

function Text22() {
  return (
    <div className="h-[20px] relative shrink-0 w-[32px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Consolas:Regular',sans-serif] leading-[20px] left-[32.6px] not-italic text-[#94a3b8] text-[14px] text-right top-0 translate-x-[-100%] whitespace-pre">11</p>
      </div>
    </div>
  );
}

function Text23() {
  return (
    <div className="h-[20px] relative shrink-0 w-[7.698px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Consolas:Regular',sans-serif] leading-[20px] left-0 not-italic text-[#475569] text-[14px] top-0 whitespace-pre">{`}`}</p>
      </div>
    </div>
  );
}

function Container21() {
  return (
    <div className="h-[28px] relative rounded-[4px] shrink-0 w-full" data-name="Container">
      <div className="content-stretch flex gap-[12px] items-start pb-0 pl-[8px] pr-0 pt-[4px] relative size-full">
        <Text22 />
        <Text23 />
      </div>
    </div>
  );
}

function Container22() {
  return (
    <div className="content-stretch flex flex-col h-[368px] items-start px-[-8px] py-0 relative shrink-0 w-full" data-name="Container">
      <Container7 />
      <Container9 />
      <Container10 />
      <Container12 />
      <Container14 />
      <Container16 />
      <Container17 />
      <Container18 />
      <Container19 />
      <Container20 />
      <Container21 />
    </div>
  );
}

function Container23() {
  return (
    <div className="bg-[#f5f9ff] h-[401.333px] relative rounded-[10px] shrink-0 w-full" data-name="Container">
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col items-start pb-[0.667px] pt-[16.667px] px-[16.667px] relative size-full">
          <Container22 />
        </div>
      </div>
      <div aria-hidden="true" className="absolute border-[#dbeafe] border-[0.667px] border-solid inset-0 pointer-events-none rounded-[10px]" />
    </div>
  );
}

function Container24() {
  return (
    <div className="absolute bg-[#eef4ff] content-stretch flex flex-col gap-[16px] h-[644px] items-start left-0 pb-[0.667px] pt-[24.667px] px-[24.667px] rounded-[14px] top-0 w-[563.333px]" data-name="Container">
      <div aria-hidden="true" className="absolute border-[#dbeafe] border-[0.667px] border-solid inset-0 pointer-events-none rounded-[14px]" />
      <Container5 />
      <Container23 />
    </div>
  );
}

function Icon1() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="Icon">
          <path d={svgPaths.p337986c0} id="Vector" stroke="var(--stroke-0, #93C5FD)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
        </g>
      </svg>
    </div>
  );
}

function Heading4() {
  return (
    <div className="h-[28px] relative shrink-0 w-[110.615px]" data-name="Heading 3">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Arial:Bold',sans-serif] leading-[28px] left-0 not-italic text-[#1e293b] text-[20px] top-[-2.33px] whitespace-pre">Risk Details</p>
      </div>
    </div>
  );
}

function Container25() {
  return (
    <div className="content-stretch flex gap-[8px] h-[28px] items-center relative shrink-0 w-full" data-name="Container">
      <Icon1 />
      <Heading4 />
    </div>
  );
}

function Container26() {
  return (
    <div className="absolute h-[28px] left-0 top-[2px] w-[27.469px]" data-name="Container">
      <p className="absolute font-['Arial:Regular',sans-serif] leading-[28px] left-0 not-italic text-[#1e293b] text-[20px] top-[-2.33px] whitespace-pre">🔒</p>
    </div>
  );
}

function Heading3() {
  return (
    <div className="h-[24px] relative shrink-0 w-[202.677px]" data-name="Heading 4">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Arial:Bold',sans-serif] leading-[24px] left-0 not-italic text-[#3b82f6] text-[16px] top-[-1.67px] whitespace-pre">SQL Injection Vulnerability</p>
      </div>
    </div>
  );
}

function Container27() {
  return (
    <div className="bg-[#fee2e2] h-[21.333px] relative rounded-[4px] shrink-0 w-[69.531px]" data-name="Container">
      <div aria-hidden="true" className="absolute border-[#dbeafe] border-[0.667px] border-solid inset-0 pointer-events-none rounded-[4px]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Arial:Bold',sans-serif] leading-[16px] left-[8.67px] not-italic text-[#dc2626] text-[12px] top-[1.67px] whitespace-pre">CRITICAL</p>
      </div>
    </div>
  );
}

function Container28() {
  return (
    <div className="content-stretch flex h-[24px] items-start justify-between relative shrink-0 w-full" data-name="Container">
      <Heading3 />
      <Container27 />
    </div>
  );
}

function Container29() {
  return (
    <div className="h-[20px] relative shrink-0 w-full" data-name="Container">
      <p className="absolute font-['Arial:Regular',sans-serif] leading-[20px] left-0 not-italic text-[#475569] text-[14px] top-[-1.33px] w-[188px] whitespace-pre-wrap">Line 2 • Security Vulnerability</p>
    </div>
  );
}

function Container30() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[8px] h-[60px] items-start left-[39.47px] top-0 w-[472.531px]" data-name="Container">
      <Container28 />
      <Container29 />
    </div>
  );
}

function Container31() {
  return (
    <div className="absolute h-[60px] left-[18px] top-[18px] w-[512px]" data-name="Container">
      <Container26 />
      <Container30 />
    </div>
  );
}

function Container32() {
  return (
    <div className="content-stretch flex h-[16px] items-start relative shrink-0 w-full" data-name="Container">
      <p className="flex-[1_0_0] font-['Arial:Bold',sans-serif] leading-[16px] min-h-px min-w-px not-italic relative text-[#475569] text-[12px] whitespace-pre-wrap">Description</p>
    </div>
  );
}

function Container33() {
  return (
    <div className="h-[20px] relative shrink-0 w-full" data-name="Container">
      <p className="absolute font-['Arial:Regular',sans-serif] leading-[20px] left-0 not-italic text-[#1e293b] text-[14px] top-[-1.33px] whitespace-pre">User input is directly concatenated into SQL query without sanitization</p>
    </div>
  );
}

function Container34() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] h-[40px] items-start relative shrink-0 w-full" data-name="Container">
      <Container32 />
      <Container33 />
    </div>
  );
}

function Container35() {
  return (
    <div className="content-stretch flex h-[16px] items-start relative shrink-0 w-full" data-name="Container">
      <p className="flex-[1_0_0] font-['Arial:Bold',sans-serif] leading-[16px] min-h-px min-w-px not-italic relative text-[#475569] text-[12px] whitespace-pre-wrap">Affected Code</p>
    </div>
  );
}

function Container36() {
  return (
    <div className="bg-[#f5f9ff] h-[33.333px] relative rounded-[4px] shrink-0 w-full" data-name="Container">
      <div className="overflow-clip relative rounded-[inherit] size-full">
        <p className="absolute font-['Consolas:Regular',sans-serif] leading-[16px] left-[8.67px] not-italic text-[#1e293b] text-[12px] top-[8.33px] whitespace-pre">{`const user = await db.query("SELECT * FROM users WHERE id = " + userId);`}</p>
      </div>
      <div aria-hidden="true" className="absolute border-[#dbeafe] border-[0.667px] border-solid inset-0 pointer-events-none rounded-[4px]" />
    </div>
  );
}

function Container37() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] h-[53.333px] items-start relative shrink-0 w-full" data-name="Container">
      <Container35 />
      <Container36 />
    </div>
  );
}

function Container38() {
  return (
    <div className="content-stretch flex h-[16px] items-start relative shrink-0 w-full" data-name="Container">
      <p className="flex-[1_0_0] font-['Arial:Bold',sans-serif] leading-[16px] min-h-px min-w-px not-italic relative text-[#475569] text-[12px] whitespace-pre-wrap">Root Cause Explanation</p>
    </div>
  );
}

function Container39() {
  return (
    <div className="h-[60px] relative shrink-0 w-full" data-name="Container">
      <p className="absolute font-['Arial:Regular',sans-serif] leading-[20px] left-0 not-italic text-[#1e293b] text-[14px] top-[-1.33px] w-[510px] whitespace-pre-wrap">The code directly concatenates user input into SQL queries without any form of sanitization or parameterization. This creates a critical SQL injection vulnerability where attackers can manipulate the query structure.</p>
    </div>
  );
}

function Container40() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] h-[80px] items-start relative shrink-0 w-full" data-name="Container">
      <Container38 />
      <Container39 />
    </div>
  );
}

function Container41() {
  return (
    <div className="content-stretch flex h-[16px] items-start relative shrink-0 w-full" data-name="Container">
      <p className="flex-[1_0_0] font-['Arial:Bold',sans-serif] leading-[16px] min-h-px min-w-px not-italic relative text-[#475569] text-[12px] whitespace-pre-wrap">💡 Recommendation</p>
    </div>
  );
}

function Container42() {
  return (
    <div className="bg-[rgba(59,130,246,0.1)] h-[37.333px] relative rounded-[4px] shrink-0 w-full" data-name="Container">
      <div aria-hidden="true" className="absolute border-[#dbeafe] border-[0.667px] border-solid inset-0 pointer-events-none rounded-[4px]" />
      <p className="absolute font-['Arial:Regular',sans-serif] leading-[20px] left-[12.67px] not-italic text-[#3b82f6] text-[14px] top-[7.33px] whitespace-pre">Use parameterized queries or prepared statements</p>
    </div>
  );
}

function Container43() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] h-[57.333px] items-start relative shrink-0 w-full" data-name="Container">
      <Container41 />
      <Container42 />
    </div>
  );
}

function Container44() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[12px] h-[283.333px] items-start left-[18px] pb-0 pt-[16.667px] px-0 top-[94px] w-[512px]" data-name="Container">
      <div aria-hidden="true" className="absolute border-[#dbeafe] border-[0.667px_0px_0px] border-solid inset-0 pointer-events-none" />
      <Container34 />
      <Container37 />
      <Container40 />
      <Container43 />
    </div>
  );
}

function Button() {
  return (
    <div className="bg-[rgba(59,130,246,0.1)] h-[395.333px] relative rounded-[14px] shrink-0 w-full" data-name="Button">
      <div aria-hidden="true" className="absolute border-2 border-[#3b82f6] border-solid inset-0 pointer-events-none rounded-[14px]" />
      <Container31 />
      <Container44 />
    </div>
  );
}

function Container45() {
  return (
    <div className="absolute h-[28px] left-0 top-[2px] w-[27.469px]" data-name="Container">
      <p className="absolute font-['Arial:Regular',sans-serif] leading-[28px] left-0 not-italic text-[#1e293b] text-[20px] top-[-2.33px] whitespace-pre">🔒</p>
    </div>
  );
}

function Heading5() {
  return (
    <div className="h-[24px] relative shrink-0 w-[239.938px]" data-name="Heading 4">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Arial:Bold',sans-serif] leading-[24px] left-0 not-italic text-[#1e293b] text-[16px] top-[-1.67px] whitespace-pre">SQL Injection in UPDATE Query</p>
      </div>
    </div>
  );
}

function Container46() {
  return (
    <div className="bg-[#fee2e2] h-[21.333px] relative rounded-[4px] shrink-0 w-[69.531px]" data-name="Container">
      <div aria-hidden="true" className="absolute border-[#dbeafe] border-[0.667px] border-solid inset-0 pointer-events-none rounded-[4px]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Arial:Bold',sans-serif] leading-[16px] left-[8.67px] not-italic text-[#dc2626] text-[12px] top-[1.67px] whitespace-pre">CRITICAL</p>
      </div>
    </div>
  );
}

function Container47() {
  return (
    <div className="content-stretch flex h-[24px] items-start justify-between relative shrink-0 w-full" data-name="Container">
      <Heading5 />
      <Container46 />
    </div>
  );
}

function Container48() {
  return (
    <div className="h-[20px] relative shrink-0 w-full" data-name="Container">
      <p className="absolute font-['Arial:Regular',sans-serif] leading-[20px] left-0 not-italic text-[#475569] text-[14px] top-[-1.33px] w-[188px] whitespace-pre-wrap">Line 5 • Security Vulnerability</p>
    </div>
  );
}

function Container49() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[8px] h-[60px] items-start left-[39.47px] top-0 w-[472.531px]" data-name="Container">
      <Container47 />
      <Container48 />
    </div>
  );
}

function Container50() {
  return (
    <div className="absolute h-[60px] left-[18px] top-[18px] w-[512px]" data-name="Container">
      <Container45 />
      <Container49 />
    </div>
  );
}

function Button1() {
  return (
    <div className="bg-[#f8fbff] h-[104px] relative rounded-[14px] shrink-0 w-full" data-name="Button">
      <div aria-hidden="true" className="absolute border-2 border-[#dbeafe] border-solid inset-0 pointer-events-none rounded-[14px]" />
      <Container50 />
    </div>
  );
}

function Container51() {
  return (
    <div className="absolute h-[28px] left-0 top-[2px] w-[27.469px]" data-name="Container">
      <p className="absolute font-['Arial:Regular',sans-serif] leading-[28px] left-0 not-italic text-[#1e293b] text-[20px] top-[-2.33px] whitespace-pre">🧠</p>
    </div>
  );
}

function Heading6() {
  return (
    <div className="h-[24px] relative shrink-0 w-[176.625px]" data-name="Heading 4">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Arial:Bold',sans-serif] leading-[24px] left-0 not-italic text-[#1e293b] text-[16px] top-[-1.67px] whitespace-pre">Missing Error Handling</p>
      </div>
    </div>
  );
}

function Container52() {
  return (
    <div className="bg-[#ffedd5] h-[21.333px] relative rounded-[4px] shrink-0 w-[48.198px]" data-name="Container">
      <div aria-hidden="true" className="absolute border-[#dbeafe] border-[0.667px] border-solid inset-0 pointer-events-none rounded-[4px]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Arial:Bold',sans-serif] leading-[16px] left-[8.67px] not-italic text-[#ea580c] text-[12px] top-[1.67px] whitespace-pre">HIGH</p>
      </div>
    </div>
  );
}

function Container53() {
  return (
    <div className="content-stretch flex h-[24px] items-start justify-between relative shrink-0 w-full" data-name="Container">
      <Heading6 />
      <Container52 />
    </div>
  );
}

function Container54() {
  return (
    <div className="h-[20px] relative shrink-0 w-full" data-name="Container">
      <p className="absolute font-['Arial:Regular',sans-serif] leading-[20px] left-0 not-italic text-[#475569] text-[14px] top-[-1.33px] w-[123px] whitespace-pre-wrap">Line 2 • Logic Error</p>
    </div>
  );
}

function Container55() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[8px] h-[60px] items-start left-[39.47px] top-0 w-[472.531px]" data-name="Container">
      <Container53 />
      <Container54 />
    </div>
  );
}

function Container56() {
  return (
    <div className="absolute h-[60px] left-[18px] top-[18px] w-[512px]" data-name="Container">
      <Container51 />
      <Container55 />
    </div>
  );
}

function Button2() {
  return (
    <div className="bg-[#f8fbff] h-[104px] relative rounded-[14px] shrink-0 w-full" data-name="Button">
      <div aria-hidden="true" className="absolute border-2 border-[#dbeafe] border-solid inset-0 pointer-events-none rounded-[14px]" />
      <Container56 />
    </div>
  );
}

function Container57() {
  return (
    <div className="absolute h-[28px] left-0 top-[2px] w-[27.469px]" data-name="Container">
      <p className="absolute font-['Arial:Regular',sans-serif] leading-[28px] left-0 not-italic text-[#1e293b] text-[20px] top-[-2.33px] whitespace-pre">🧠</p>
    </div>
  );
}

function Heading7() {
  return (
    <div className="h-[24px] relative shrink-0 w-[152.583px]" data-name="Heading 4">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Arial:Bold',sans-serif] leading-[24px] left-0 not-italic text-[#1e293b] text-[16px] top-[-1.67px] whitespace-pre">Race Condition Risk</p>
      </div>
    </div>
  );
}

function Container58() {
  return (
    <div className="bg-[#ffedd5] h-[21.333px] relative rounded-[4px] shrink-0 w-[48.198px]" data-name="Container">
      <div aria-hidden="true" className="absolute border-[#dbeafe] border-[0.667px] border-solid inset-0 pointer-events-none rounded-[4px]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Arial:Bold',sans-serif] leading-[16px] left-[8.67px] not-italic text-[#ea580c] text-[12px] top-[1.67px] whitespace-pre">HIGH</p>
      </div>
    </div>
  );
}

function Container59() {
  return (
    <div className="content-stretch flex h-[24px] items-start justify-between relative shrink-0 w-full" data-name="Container">
      <Heading7 />
      <Container58 />
    </div>
  );
}

function Container60() {
  return (
    <div className="h-[20px] relative shrink-0 w-full" data-name="Container">
      <p className="absolute font-['Arial:Regular',sans-serif] leading-[20px] left-0 not-italic text-[#475569] text-[14px] top-[-1.33px] w-[123px] whitespace-pre-wrap">Line 4 • Logic Error</p>
    </div>
  );
}

function Container61() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[8px] h-[60px] items-start left-[39.47px] top-0 w-[472.531px]" data-name="Container">
      <Container59 />
      <Container60 />
    </div>
  );
}

function Container62() {
  return (
    <div className="absolute h-[60px] left-[18px] top-[18px] w-[512px]" data-name="Container">
      <Container57 />
      <Container61 />
    </div>
  );
}

function Button3() {
  return (
    <div className="bg-[#f8fbff] h-[104px] relative rounded-[14px] shrink-0 w-full" data-name="Button">
      <div aria-hidden="true" className="absolute border-2 border-[#dbeafe] border-solid inset-0 pointer-events-none rounded-[14px]" />
      <Container62 />
    </div>
  );
}

function Container63() {
  return (
    <div className="absolute h-[28px] left-0 top-[2px] w-[27.469px]" data-name="Container">
      <p className="absolute font-['Arial:Regular',sans-serif] leading-[28px] left-0 not-italic text-[#1e293b] text-[20px] top-[-2.33px] whitespace-pre">🔒</p>
    </div>
  );
}

function Heading8() {
  return (
    <div className="h-[24px] relative shrink-0 w-[186.406px]" data-name="Heading 4">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Arial:Bold',sans-serif] leading-[24px] left-0 not-italic text-[#1e293b] text-[16px] top-[-1.67px] whitespace-pre">Missing Input Validation</p>
      </div>
    </div>
  );
}

function Container64() {
  return (
    <div className="bg-[#fef3c7] h-[21.333px] relative rounded-[4px] shrink-0 w-[68.385px]" data-name="Container">
      <div aria-hidden="true" className="absolute border-[#dbeafe] border-[0.667px] border-solid inset-0 pointer-events-none rounded-[4px]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Arial:Bold',sans-serif] leading-[16px] left-[8.67px] not-italic text-[#ca8a04] text-[12px] top-[1.67px] whitespace-pre">MEDIUM</p>
      </div>
    </div>
  );
}

function Container65() {
  return (
    <div className="content-stretch flex h-[24px] items-start justify-between relative shrink-0 w-full" data-name="Container">
      <Heading8 />
      <Container64 />
    </div>
  );
}

function Container66() {
  return (
    <div className="h-[20px] relative shrink-0 w-full" data-name="Container">
      <p className="absolute font-['Arial:Regular',sans-serif] leading-[20px] left-0 not-italic text-[#475569] text-[14px] top-[-1.33px] w-[188px] whitespace-pre-wrap">Line 1 • Security Vulnerability</p>
    </div>
  );
}

function Container67() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[8px] h-[60px] items-start left-[39.47px] top-0 w-[472.531px]" data-name="Container">
      <Container65 />
      <Container66 />
    </div>
  );
}

function Container68() {
  return (
    <div className="absolute h-[60px] left-[18px] top-[18px] w-[512px]" data-name="Container">
      <Container63 />
      <Container67 />
    </div>
  );
}

function Button4() {
  return (
    <div className="bg-[#f8fbff] h-[104px] relative rounded-[14px] shrink-0 w-full" data-name="Button">
      <div aria-hidden="true" className="absolute border-2 border-[#dbeafe] border-solid inset-0 pointer-events-none rounded-[14px]" />
      <Container68 />
    </div>
  );
}

function Container69() {
  return (
    <div className="absolute h-[28px] left-0 top-[2px] w-[27.469px]" data-name="Container">
      <p className="absolute font-['Arial:Regular',sans-serif] leading-[28px] left-0 not-italic text-[#1e293b] text-[20px] top-[-2.33px] whitespace-pre">🧠</p>
    </div>
  );
}

function Heading9() {
  return (
    <div className="h-[24px] relative shrink-0 w-[98.219px]" data-name="Heading 4">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Arial:Bold',sans-serif] leading-[24px] left-0 not-italic text-[#1e293b] text-[16px] top-[-1.67px] whitespace-pre">Silent Failure</p>
      </div>
    </div>
  );
}

function Container70() {
  return (
    <div className="bg-[#fef3c7] h-[21.333px] relative rounded-[4px] shrink-0 w-[68.385px]" data-name="Container">
      <div aria-hidden="true" className="absolute border-[#dbeafe] border-[0.667px] border-solid inset-0 pointer-events-none rounded-[4px]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Arial:Bold',sans-serif] leading-[16px] left-[8.67px] not-italic text-[#ca8a04] text-[12px] top-[1.67px] whitespace-pre">MEDIUM</p>
      </div>
    </div>
  );
}

function Container71() {
  return (
    <div className="content-stretch flex h-[24px] items-start justify-between relative shrink-0 w-full" data-name="Container">
      <Heading9 />
      <Container70 />
    </div>
  );
}

function Container72() {
  return (
    <div className="h-[20px] relative shrink-0 w-full" data-name="Container">
      <p className="absolute font-['Arial:Regular',sans-serif] leading-[20px] left-0 not-italic text-[#475569] text-[14px] top-[-1.33px] w-[123px] whitespace-pre-wrap">Line 6 • Logic Error</p>
    </div>
  );
}

function Container73() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[8px] h-[60px] items-start left-[39.47px] top-0 w-[472.531px]" data-name="Container">
      <Container71 />
      <Container72 />
    </div>
  );
}

function Container74() {
  return (
    <div className="absolute h-[60px] left-[18px] top-[18px] w-[512px]" data-name="Container">
      <Container69 />
      <Container73 />
    </div>
  );
}

function Button5() {
  return (
    <div className="bg-[#f8fbff] h-[104px] relative rounded-[14px] shrink-0 w-full" data-name="Button">
      <div aria-hidden="true" className="absolute border-2 border-[#dbeafe] border-solid inset-0 pointer-events-none rounded-[14px]" />
      <Container74 />
    </div>
  );
}

function Container75() {
  return (
    <div className="absolute h-[28px] left-0 top-[2px] w-[27.469px]" data-name="Container">
      <p className="absolute font-['Arial:Regular',sans-serif] leading-[28px] left-0 not-italic text-[#1e293b] text-[20px] top-[-2.33px] whitespace-pre">🧠</p>
    </div>
  );
}

function Heading10() {
  return (
    <div className="h-[24px] relative shrink-0 w-[126.656px]" data-name="Heading 4">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Arial:Bold',sans-serif] leading-[24px] left-0 not-italic text-[#1e293b] text-[16px] top-[-1.67px] whitespace-pre">Missing Logging</p>
      </div>
    </div>
  );
}

function Container76() {
  return (
    <div className="bg-[#d1fae5] h-[21.333px] relative rounded-[4px] shrink-0 w-[44.583px]" data-name="Container">
      <div aria-hidden="true" className="absolute border-[#dbeafe] border-[0.667px] border-solid inset-0 pointer-events-none rounded-[4px]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Arial:Bold',sans-serif] leading-[16px] left-[8.67px] not-italic text-[#059669] text-[12px] top-[1.67px] whitespace-pre">LOW</p>
      </div>
    </div>
  );
}

function Container77() {
  return (
    <div className="content-stretch flex h-[24px] items-start justify-between relative shrink-0 w-full" data-name="Container">
      <Heading10 />
      <Container76 />
    </div>
  );
}

function Container78() {
  return (
    <div className="h-[20px] relative shrink-0 w-full" data-name="Container">
      <p className="absolute font-['Arial:Regular',sans-serif] leading-[20px] left-0 not-italic text-[#475569] text-[14px] top-[-1.33px] w-[123px] whitespace-pre-wrap">Line 4 • Logic Error</p>
    </div>
  );
}

function Container79() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[8px] h-[60px] items-start left-[39.47px] top-0 w-[472.531px]" data-name="Container">
      <Container77 />
      <Container78 />
    </div>
  );
}

function Container80() {
  return (
    <div className="absolute h-[60px] left-[18px] top-[18px] w-[512px]" data-name="Container">
      <Container75 />
      <Container79 />
    </div>
  );
}

function Button6() {
  return (
    <div className="bg-[#f8fbff] h-[104px] relative rounded-[14px] shrink-0 w-full" data-name="Button">
      <div aria-hidden="true" className="absolute border-2 border-[#dbeafe] border-solid inset-0 pointer-events-none rounded-[14px]" />
      <Container80 />
    </div>
  );
}

function Container81() {
  return (
    <div className="absolute h-[28px] left-0 top-[2px] w-[27.469px]" data-name="Container">
      <p className="absolute font-['Arial:Regular',sans-serif] leading-[28px] left-0 not-italic text-[#1e293b] text-[20px] top-[-2.33px] whitespace-pre">👁️</p>
    </div>
  );
}

function Heading11() {
  return (
    <div className="h-[24px] relative shrink-0 w-[210.906px]" data-name="Heading 4">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Arial:Bold',sans-serif] leading-[24px] left-0 not-italic text-[#1e293b] text-[16px] top-[-1.67px] whitespace-pre">Simplified Pattern Detected</p>
      </div>
    </div>
  );
}

function Container82() {
  return (
    <div className="bg-[#d1fae5] h-[21.333px] relative rounded-[4px] shrink-0 w-[44.583px]" data-name="Container">
      <div aria-hidden="true" className="absolute border-[#dbeafe] border-[0.667px] border-solid inset-0 pointer-events-none rounded-[4px]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Arial:Bold',sans-serif] leading-[16px] left-[8.67px] not-italic text-[#059669] text-[12px] top-[1.67px] whitespace-pre">LOW</p>
      </div>
    </div>
  );
}

function Container83() {
  return (
    <div className="content-stretch flex h-[24px] items-start justify-between relative shrink-0 w-full" data-name="Container">
      <Heading11 />
      <Container82 />
    </div>
  );
}

function Container84() {
  return (
    <div className="h-[20px] relative shrink-0 w-full" data-name="Container">
      <p className="absolute font-['Arial:Regular',sans-serif] leading-[20px] left-0 not-italic text-[#475569] text-[14px] top-[-1.33px] w-[205px] whitespace-pre-wrap">Line 1 • AI Hallucination Pattern</p>
    </div>
  );
}

function Container85() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[8px] h-[60px] items-start left-[39.47px] top-0 w-[472.531px]" data-name="Container">
      <Container83 />
      <Container84 />
    </div>
  );
}

function Container86() {
  return (
    <div className="absolute h-[60px] left-[18px] top-[18px] w-[512px]" data-name="Container">
      <Container81 />
      <Container85 />
    </div>
  );
}

function Button7() {
  return (
    <div className="bg-[#f8fbff] h-[104px] relative rounded-[14px] shrink-0 w-full" data-name="Button">
      <div aria-hidden="true" className="absolute border-2 border-[#dbeafe] border-solid inset-0 pointer-events-none rounded-[14px]" />
      <Container86 />
    </div>
  );
}

function Container87() {
  return (
    <div className="h-[600px] relative shrink-0 w-full" data-name="Container">
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col gap-[12px] items-start pl-0 pr-[15.333px] py-0 relative size-full">
          <Button />
          <Button1 />
          <Button2 />
          <Button3 />
          <Button4 />
          <Button5 />
          <Button6 />
          <Button7 />
        </div>
      </div>
    </div>
  );
}

function Container88() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[16px] h-[644px] items-start left-[587.33px] top-0 w-[563.333px]" data-name="Container">
      <Container25 />
      <Container87 />
    </div>
  );
}

function Container89() {
  return (
    <div className="h-[644px] relative shrink-0 w-full" data-name="Container">
      <Container24 />
      <Container88 />
    </div>
  );
}

function Container90() {
  return (
    <div className="content-stretch flex h-[32px] items-start relative shrink-0 w-full" data-name="Container">
      <p className="flex-[1_0_0] font-['Arial:Bold',sans-serif] leading-[32px] min-h-px min-w-px not-italic relative text-[#dc2626] text-[24px] whitespace-pre-wrap">3</p>
    </div>
  );
}

function Container91() {
  return (
    <div className="h-[20px] relative shrink-0 w-full" data-name="Container">
      <p className="absolute font-['Arial:Regular',sans-serif] leading-[20px] left-0 not-italic text-[#475569] text-[14px] top-[-1.33px] whitespace-pre">Security Issues</p>
    </div>
  );
}

function Container92() {
  return (
    <div className="absolute bg-[#f8d6d2] content-stretch flex flex-col gap-[4px] h-[89.333px] items-start left-0 pb-[0.667px] pt-[16.667px] px-[16.667px] rounded-[10px] top-0 w-[275.667px]" data-name="Container">
      <div aria-hidden="true" className="absolute border-[#dbeafe] border-[0.667px] border-solid inset-0 pointer-events-none rounded-[10px]" />
      <Container90 />
      <Container91 />
    </div>
  );
}

function Container93() {
  return (
    <div className="content-stretch flex h-[32px] items-start relative shrink-0 w-full" data-name="Container">
      <p className="flex-[1_0_0] font-['Arial:Bold',sans-serif] leading-[32px] min-h-px min-w-px not-italic relative text-[#bc3dff] text-[24px] whitespace-pre-wrap">4</p>
    </div>
  );
}

function Container94() {
  return (
    <div className="h-[20px] relative shrink-0 w-full" data-name="Container">
      <p className="absolute font-['Arial:Regular',sans-serif] leading-[20px] left-0 not-italic text-[#475569] text-[14px] top-[-1.33px] whitespace-pre">Logic Errors</p>
    </div>
  );
}

function Container95() {
  return (
    <div className="absolute bg-[#edd6f9] content-stretch flex flex-col gap-[4px] h-[89.333px] items-start left-[291.67px] pb-[0.667px] pt-[16.667px] px-[16.667px] rounded-[10px] top-0 w-[275.667px]" data-name="Container">
      <div aria-hidden="true" className="absolute border-[#dbeafe] border-[0.667px] border-solid inset-0 pointer-events-none rounded-[10px]" />
      <Container93 />
      <Container94 />
    </div>
  );
}

function Container96() {
  return (
    <div className="content-stretch flex h-[32px] items-start relative shrink-0 w-full" data-name="Container">
      <p className="flex-[1_0_0] font-['Arial:Bold',sans-serif] leading-[32px] min-h-px min-w-px not-italic relative text-[#d97706] text-[24px] whitespace-pre-wrap">0</p>
    </div>
  );
}

function Container97() {
  return (
    <div className="h-[20px] relative shrink-0 w-full" data-name="Container">
      <p className="absolute font-['Arial:Regular',sans-serif] leading-[20px] left-0 not-italic text-[#475569] text-[14px] top-[-1.33px] whitespace-pre">License Issues</p>
    </div>
  );
}

function Container98() {
  return (
    <div className="absolute bg-[#fef3c7] content-stretch flex flex-col gap-[4px] h-[89.333px] items-start left-[583.33px] pb-[0.667px] pt-[16.667px] px-[16.667px] rounded-[10px] top-0 w-[275.667px]" data-name="Container">
      <div aria-hidden="true" className="absolute border-[#dbeafe] border-[0.667px] border-solid inset-0 pointer-events-none rounded-[10px]" />
      <Container96 />
      <Container97 />
    </div>
  );
}

function Container99() {
  return (
    <div className="content-stretch flex h-[32px] items-start relative shrink-0 w-full" data-name="Container">
      <p className="flex-[1_0_0] font-['Arial:Bold',sans-serif] leading-[32px] min-h-px min-w-px not-italic relative text-[#4fa2ff] text-[24px] whitespace-pre-wrap">1</p>
    </div>
  );
}

function Container100() {
  return (
    <div className="h-[20px] relative shrink-0 w-full" data-name="Container">
      <p className="absolute font-['Arial:Regular',sans-serif] leading-[20px] left-0 not-italic text-[#475569] text-[14px] top-[-1.33px] whitespace-pre">AI Hallucinations</p>
    </div>
  );
}

function Container101() {
  return (
    <div className="absolute bg-[rgba(147,197,253,0.1)] content-stretch flex flex-col gap-[4px] h-[89.333px] items-start left-[875px] pb-[0.667px] pt-[16.667px] px-[16.667px] rounded-[10px] top-0 w-[275.667px]" data-name="Container">
      <div aria-hidden="true" className="absolute border-[#dbeafe] border-[0.667px] border-solid inset-0 pointer-events-none rounded-[10px]" />
      <Container99 />
      <Container100 />
    </div>
  );
}

function Container102() {
  return (
    <div className="h-[89.333px] relative shrink-0 w-full" data-name="Container">
      <Container92 />
      <Container95 />
      <Container98 />
      <Container101 />
    </div>
  );
}

function Icon2() {
  return (
    <div className="absolute left-[24.67px] size-[20px] top-[14.67px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="Icon">
          <path d="M12.5 15L7.5 10L12.5 5" id="Vector" stroke="var(--stroke-0, #1E293B)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
        </g>
      </svg>
    </div>
  );
}

function Button8() {
  return (
    <div className="bg-[#f8fbff] h-[49.333px] relative rounded-[10px] shrink-0 w-[112.896px]" data-name="Button">
      <div aria-hidden="true" className="absolute border-[#dbeafe] border-[0.667px] border-solid inset-0 pointer-events-none rounded-[10px]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <Icon2 />
        <p className="absolute font-['Arial:Bold',sans-serif] leading-[24px] left-[71.17px] not-italic text-[#1e293b] text-[16px] text-center top-[11px] translate-x-[-50%] whitespace-pre">Back</p>
      </div>
    </div>
  );
}

function Button9() {
  return (
    <div className="bg-[#3b82f6] h-[49.333px] relative rounded-[10px] shadow-[0px_10px_15px_-3px_rgba(0,0,0,0.1),0px_4px_6px_-4px_rgba(0,0,0,0.1)] shrink-0 w-[225.635px]" data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Arial:Bold',sans-serif] leading-[24px] left-[113px] not-italic text-[#f8fbff] text-[16px] text-center top-[11px] translate-x-[-50%] whitespace-pre">View Fix Guidance →</p>
      </div>
    </div>
  );
}

function Container103() {
  return (
    <div className="h-[49.333px] relative shrink-0 w-full" data-name="Container">
      <div className="content-stretch flex items-start justify-between relative size-full">
        <Button8 />
        <Button9 />
      </div>
    </div>
  );
}

function RiskAnalysis() {
  return (
    <div className="content-stretch flex flex-col gap-[24px] h-[980px] items-start relative shrink-0 w-full" data-name="RiskAnalysis">
      <Container />
      <Container4 />
      <Container89 />
      <Container102 />
      <Container103 />
    </div>
  );
}

function Container104() {
  return (
    <div className="bg-[#f8fbff] content-stretch flex flex-col h-[1045.333px] items-start pb-[0.667px] pt-[32.667px] px-[32.667px] relative rounded-[16px] shrink-0 w-[1216px]" data-name="Container">
      <div aria-hidden="true" className="absolute border-[#dbeafe] border-[0.667px] border-solid inset-0 pointer-events-none rounded-[16px] shadow-[0px_1px_3px_0px_rgba(0,0,0,0.1),0px_1px_2px_-1px_rgba(0,0,0,0.1)]" />
      <RiskAnalysis />
    </div>
  );
}

function Paragraph1() {
  return (
    <div className="h-[20px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Arial:Regular','Noto_Sans_KR:Regular',sans-serif] leading-[20px] left-[608.35px] text-[#94a3b8] text-[14px] text-center top-[-1.33px] translate-x-[-50%] whitespace-pre" style={{ fontVariationSettings: "'wght' 400" }}>
        Trenda - AI가 만든 코드를 사람에게 넘기기 전에 AI 스스로 검증·점수화·차단
      </p>
    </div>
  );
}

function Paragraph2() {
  return (
    <div className="h-[20px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Arial:Regular',sans-serif] leading-[20px] left-[608.75px] not-italic text-[#94a3b8] text-[14px] text-center top-[-1.33px] translate-x-[-50%] whitespace-pre">Powered by AI Code Responsibility Layer • © 2025 Trenda</p>
    </div>
  );
}

function Container105() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] h-[48px] items-start relative shrink-0 w-[1216px]" data-name="Container">
      <Paragraph1 />
      <Paragraph2 />
    </div>
  );
}

function App() {
  return (
    <div className="absolute bg-[#f5f9ff] content-stretch flex flex-col gap-[64px] h-[1398px] items-start left-0 pb-0 pt-[208.667px] px-[479px] top-0" data-name="App">
      <Container104 />
      <Container105 />
    </div>
  );
}

function Text24() {
  return (
    <div className="absolute h-[18px] left-0 top-[-20000px] w-[13.219px]" data-name="Text">
      <p className="absolute font-['Arial:Regular',sans-serif] leading-[18px] left-0 not-italic text-[#1e293b] text-[12px] top-[-1.33px] whitespace-pre">10</p>
    </div>
  );
}

function Icon3() {
  return (
    <div className="h-[24px] overflow-clip relative shrink-0 w-full" data-name="Icon">
      <div className="absolute inset-[8.33%_16.67%_8.32%_16.67%]" data-name="Vector">
        <div className="absolute inset-[-5%_-6.25%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 22.0034">
            <path d={svgPaths.p27979bf0} id="Vector" stroke="var(--stroke-0, #F8FBFF)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Container106() {
  return (
    <div className="bg-[#3b82f6] relative rounded-[10px] shadow-[0px_10px_15px_-3px_rgba(0,0,0,0.1),0px_4px_6px_-4px_rgba(0,0,0,0.1)] shrink-0 size-[40px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pb-0 pt-[8px] px-[8px] relative size-full">
        <Icon3 />
      </div>
    </div>
  );
}

function Heading() {
  return (
    <div className="content-stretch flex h-[32px] items-start relative shrink-0 w-full" data-name="Heading 1">
      <p className="flex-[1_0_0] font-['Arial:Bold',sans-serif] leading-[32px] min-h-px min-w-px not-italic relative text-[#3b82f6] text-[24px] whitespace-pre-wrap">Trenda</p>
    </div>
  );
}

function Paragraph3() {
  return (
    <div className="content-stretch flex h-[16px] items-start relative shrink-0 w-full" data-name="Paragraph">
      <p className="font-['Arial:Regular',sans-serif] leading-[16px] not-italic relative shrink-0 text-[#475569] text-[12px] whitespace-pre">AI Code Responsibility Layer</p>
    </div>
  );
}

function Container107() {
  return (
    <div className="flex-[1_0_0] h-[48px] min-h-px min-w-px relative" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <Heading />
        <Paragraph3 />
      </div>
    </div>
  );
}

function Container108() {
  return (
    <div className="h-[48px] relative shrink-0 w-[206.938px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[12px] items-center relative size-full">
        <Container106 />
        <Container107 />
      </div>
    </div>
  );
}

function Icon4() {
  return (
    <div className="h-[20px] overflow-clip relative shrink-0 w-full" data-name="Icon">
      <div className="absolute inset-[12.56%_12.56%_12.5%_12.49%]" data-name="Vector">
        <div className="absolute inset-[-5.56%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16.6564 16.6564">
            <path d={svgPaths.p11067680} id="Vector" stroke="var(--stroke-0, #3B82F6)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Button10() {
  return (
    <div className="bg-[#f8fbff] relative rounded-[10px] shrink-0 size-[37.333px]" data-name="Button">
      <div aria-hidden="true" className="absolute border-[#dbeafe] border-[0.667px] border-solid inset-0 pointer-events-none rounded-[10px]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pb-[0.667px] pt-[8.667px] px-[8.667px] relative size-full">
        <Icon4 />
      </div>
    </div>
  );
}

function Container109() {
  return (
    <div className="h-[20px] relative shrink-0 w-[70.49px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Arial:Regular',sans-serif] leading-[20px] left-0 not-italic text-[#475569] text-[14px] top-[-1.33px] w-[71px] whitespace-pre-wrap">Step 4 of 8</p>
      </div>
    </div>
  );
}

function Container110() {
  return (
    <div className="h-[37.333px] relative shrink-0 w-[123.823px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[16px] items-center relative size-full">
        <Button10 />
        <Container109 />
      </div>
    </div>
  );
}

function Container111() {
  return (
    <div className="content-stretch flex h-[48px] items-center justify-between relative shrink-0 w-full" data-name="Container">
      <Container108 />
      <Container110 />
    </div>
  );
}

function Icon5() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="Icon">
          <path d={svgPaths.p19e4f80} id="Vector" stroke="var(--stroke-0, #3B82F6)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          <path d={svgPaths.p8586900} id="Vector_2" stroke="var(--stroke-0, #3B82F6)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
        </g>
      </svg>
    </div>
  );
}

function Container112() {
  return (
    <div className="bg-[#93c5fd] flex-[1_0_0] min-h-px min-w-px relative rounded-[22369600px] w-[40px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center relative size-full">
        <Icon5 />
      </div>
    </div>
  );
}

function Container113() {
  return (
    <div className="h-[16px] relative shrink-0 w-[61.135px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start relative size-full">
        <p className="font-['Arial:Regular',sans-serif] leading-[16px] not-italic relative shrink-0 text-[#93c5fd] text-[12px] text-center whitespace-pre">Code Input</p>
      </div>
    </div>
  );
}

function Container114() {
  return (
    <div className="flex-[1_0_0] h-[64px] min-h-px min-w-px relative" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[8px] items-center relative size-full">
        <Container112 />
        <Container113 />
      </div>
    </div>
  );
}

function Container115() {
  return <div className="bg-[#93c5fd] flex-[1_0_0] h-[2px] min-h-px min-w-px" data-name="Container" />;
}

function Container116() {
  return (
    <div className="flex-[1_0_0] h-[64px] min-h-px min-w-px relative" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center relative size-full">
        <Container114 />
        <Container115 />
      </div>
    </div>
  );
}

function Icon6() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="Icon">
          <path d={svgPaths.p21b6f680} id="Vector" stroke="var(--stroke-0, #3B82F6)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
        </g>
      </svg>
    </div>
  );
}

function Container117() {
  return (
    <div className="bg-[#93c5fd] flex-[1_0_0] min-h-px min-w-px relative rounded-[22369600px] w-[40px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center relative size-full">
        <Icon6 />
      </div>
    </div>
  );
}

function Container118() {
  return (
    <div className="h-[32px] relative shrink-0 w-[72.5px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Arial:Regular',sans-serif] leading-[16px] left-[36.59px] not-italic text-[#93c5fd] text-[12px] text-center top-[-1px] translate-x-[-50%] w-[61px] whitespace-pre-wrap">Verification Setup</p>
      </div>
    </div>
  );
}

function Container119() {
  return (
    <div className="flex-[1_0_0] h-[80px] min-h-px min-w-px relative" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[8px] items-center relative size-full">
        <Container117 />
        <Container118 />
      </div>
    </div>
  );
}

function Container120() {
  return <div className="bg-[#93c5fd] flex-[1_0_0] h-[2px] min-h-px min-w-px" data-name="Container" />;
}

function Container121() {
  return (
    <div className="flex-[1_0_0] h-[80px] min-h-px min-w-px relative" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center relative size-full">
        <Container119 />
        <Container120 />
      </div>
    </div>
  );
}

function Icon7() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="Icon">
          <path d="M4.16667 17.5V12.5" id="Vector" stroke="var(--stroke-0, #3B82F6)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          <path d="M10 17.5V7.5" id="Vector_2" stroke="var(--stroke-0, #3B82F6)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          <path d="M15.8333 17.5V2.5" id="Vector_3" stroke="var(--stroke-0, #3B82F6)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
        </g>
      </svg>
    </div>
  );
}

function Container122() {
  return (
    <div className="bg-[#93c5fd] flex-[1_0_0] min-h-px min-w-px relative rounded-[22369600px] w-[40px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center relative size-full">
        <Icon7 />
      </div>
    </div>
  );
}

function Container123() {
  return (
    <div className="h-[32px] relative shrink-0 w-[72.5px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Arial:Regular',sans-serif] leading-[16px] left-[36.59px] not-italic text-[#93c5fd] text-[12px] text-center top-[-1px] translate-x-[-50%] w-[61px] whitespace-pre-wrap">Verification Result</p>
      </div>
    </div>
  );
}

function Container124() {
  return (
    <div className="flex-[1_0_0] h-[80px] min-h-px min-w-px relative" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[8px] items-center relative size-full">
        <Container122 />
        <Container123 />
      </div>
    </div>
  );
}

function Container125() {
  return <div className="bg-[#93c5fd] flex-[1_0_0] h-[2px] min-h-px min-w-px" data-name="Container" />;
}

function Container126() {
  return (
    <div className="flex-[1_0_0] h-[80px] min-h-px min-w-px relative" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center relative size-full">
        <Container124 />
        <Container125 />
      </div>
    </div>
  );
}

function Icon8() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="Icon">
          <path d={svgPaths.p3ac0b600} id="Vector" stroke="var(--stroke-0, #F8FBFF)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          <path d={svgPaths.p3c797180} id="Vector_2" stroke="var(--stroke-0, #F8FBFF)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
        </g>
      </svg>
    </div>
  );
}

function Container127() {
  return (
    <div className="bg-[#3b82f6] flex-[1_0_0] min-h-px min-w-px relative rounded-[22369600px] shadow-[0px_10px_15px_-3px_rgba(59,130,246,0.3),0px_4px_6px_-4px_rgba(59,130,246,0.3)] w-[40px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center relative size-full">
        <Icon8 />
      </div>
    </div>
  );
}

function Container128() {
  return (
    <div className="h-[32px] relative shrink-0 w-[72.5px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Arial:Bold',sans-serif] leading-[16px] left-[36.56px] not-italic text-[#3b82f6] text-[12px] text-center top-[-1px] translate-x-[-50%] w-[47px] whitespace-pre-wrap">Risk Analysis</p>
      </div>
    </div>
  );
}

function Container129() {
  return (
    <div className="flex-[1_0_0] h-[80px] min-h-px min-w-px relative" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[8px] items-center relative size-full">
        <Container127 />
        <Container128 />
      </div>
    </div>
  );
}

function Container130() {
  return <div className="bg-[#dbeafe] flex-[1_0_0] h-[2px] min-h-px min-w-px" data-name="Container" />;
}

function Container131() {
  return (
    <div className="flex-[1_0_0] h-[80px] min-h-px min-w-px relative" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center relative size-full">
        <Container129 />
        <Container130 />
      </div>
    </div>
  );
}

function Icon9() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="Icon">
          <path d={svgPaths.pdf995c0} id="Vector" stroke="var(--stroke-0, #94A3B8)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          <path d="M7.5 15H12.5" id="Vector_2" stroke="var(--stroke-0, #94A3B8)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          <path d="M8.33333 18.3333H11.6667" id="Vector_3" stroke="var(--stroke-0, #94A3B8)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
        </g>
      </svg>
    </div>
  );
}

function Container132() {
  return (
    <div className="bg-[#f8fbff] flex-[1_0_0] min-h-px min-w-px relative rounded-[22369600px] w-[40px]" data-name="Container">
      <div aria-hidden="true" className="absolute border-[#dbeafe] border-[0.667px] border-solid inset-0 pointer-events-none rounded-[22369600px]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center p-[0.667px] relative size-full">
        <Icon9 />
      </div>
    </div>
  );
}

function Container133() {
  return (
    <div className="h-[16px] relative shrink-0 w-[69.542px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start relative size-full">
        <p className="font-['Arial:Regular',sans-serif] leading-[16px] not-italic relative shrink-0 text-[#94a3b8] text-[12px] text-center whitespace-pre">Fix Guidance</p>
      </div>
    </div>
  );
}

function Container134() {
  return (
    <div className="flex-[1_0_0] h-[64px] min-h-px min-w-px relative" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[8px] items-center relative size-full">
        <Container132 />
        <Container133 />
      </div>
    </div>
  );
}

function Container135() {
  return <div className="bg-[#dbeafe] flex-[1_0_0] h-[2px] min-h-px min-w-px" data-name="Container" />;
}

function Container136() {
  return (
    <div className="flex-[1_0_0] h-[64px] min-h-px min-w-px relative" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center relative size-full">
        <Container134 />
        <Container135 />
      </div>
    </div>
  );
}

function Icon10() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="Icon">
          <path d={svgPaths.p3ac0b600} id="Vector" stroke="var(--stroke-0, #94A3B8)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          <path d={svgPaths.p3c797180} id="Vector_2" stroke="var(--stroke-0, #94A3B8)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
        </g>
      </svg>
    </div>
  );
}

function Container137() {
  return (
    <div className="bg-[#f8fbff] flex-[1_0_0] min-h-px min-w-px relative rounded-[22369600px] w-[40px]" data-name="Container">
      <div aria-hidden="true" className="absolute border-[#dbeafe] border-[0.667px] border-solid inset-0 pointer-events-none rounded-[22369600px]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center p-[0.667px] relative size-full">
        <Icon10 />
      </div>
    </div>
  );
}

function Container138() {
  return (
    <div className="h-[32px] relative shrink-0 w-[72.5px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Arial:Regular',sans-serif] leading-[16px] left-[36.27px] not-italic text-[#94a3b8] text-[12px] text-center top-[-1px] translate-x-[-50%] w-[57px] whitespace-pre-wrap">Bottleneck Insights</p>
      </div>
    </div>
  );
}

function Container139() {
  return (
    <div className="flex-[1_0_0] h-[80px] min-h-px min-w-px relative" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[8px] items-center relative size-full">
        <Container137 />
        <Container138 />
      </div>
    </div>
  );
}

function Container140() {
  return <div className="bg-[#dbeafe] flex-[1_0_0] h-[2px] min-h-px min-w-px" data-name="Container" />;
}

function Container141() {
  return (
    <div className="flex-[1_0_0] h-[80px] min-h-px min-w-px relative" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center relative size-full">
        <Container139 />
        <Container140 />
      </div>
    </div>
  );
}

function Icon11() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="Icon">
          <path d={svgPaths.p202ee840} id="Vector" stroke="var(--stroke-0, #94A3B8)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          <path d={svgPaths.p3b27f100} id="Vector_2" stroke="var(--stroke-0, #94A3B8)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
        </g>
      </svg>
    </div>
  );
}

function Container142() {
  return (
    <div className="bg-[#f8fbff] flex-[1_0_0] min-h-px min-w-px relative rounded-[22369600px] w-[40px]" data-name="Container">
      <div aria-hidden="true" className="absolute border-[#dbeafe] border-[0.667px] border-solid inset-0 pointer-events-none rounded-[22369600px]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center p-[0.667px] relative size-full">
        <Icon11 />
      </div>
    </div>
  );
}

function Container143() {
  return (
    <div className="h-[16px] relative shrink-0 w-[71.948px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start relative size-full">
        <p className="font-['Arial:Regular',sans-serif] leading-[16px] not-italic relative shrink-0 text-[#94a3b8] text-[12px] text-center whitespace-pre">Policy Engine</p>
      </div>
    </div>
  );
}

function Container144() {
  return (
    <div className="flex-[1_0_0] h-[64px] min-h-px min-w-px relative" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[8px] items-center relative size-full">
        <Container142 />
        <Container143 />
      </div>
    </div>
  );
}

function Container145() {
  return <div className="bg-[#dbeafe] flex-[1_0_0] h-[2px] min-h-px min-w-px" data-name="Container" />;
}

function Container146() {
  return (
    <div className="flex-[1_0_0] h-[64px] min-h-px min-w-px relative" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center relative size-full">
        <Container144 />
        <Container145 />
      </div>
    </div>
  );
}

function Icon12() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="Icon">
          <path d={svgPaths.p2110f1c0} id="Vector" stroke="var(--stroke-0, #94A3B8)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          <path d="M2.5 2.5V6.66667H6.66667" id="Vector_2" stroke="var(--stroke-0, #94A3B8)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          <path d={svgPaths.pc8ce200} id="Vector_3" stroke="var(--stroke-0, #94A3B8)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
        </g>
      </svg>
    </div>
  );
}

function Container147() {
  return (
    <div className="bg-[#f8fbff] flex-[1_0_0] min-h-px min-w-px relative rounded-[22369600px] w-[40px]" data-name="Container">
      <div aria-hidden="true" className="absolute border-[#dbeafe] border-[0.667px] border-solid inset-0 pointer-events-none rounded-[22369600px]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center p-[0.667px] relative size-full">
        <Icon12 />
      </div>
    </div>
  );
}

function Container148() {
  return (
    <div className="h-[16px] relative shrink-0 w-[103.26px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start relative size-full">
        <p className="font-['Arial:Regular',sans-serif] leading-[16px] not-italic relative shrink-0 text-[#94a3b8] text-[12px] text-center whitespace-pre">Verification History</p>
      </div>
    </div>
  );
}

function Container149() {
  return (
    <div className="flex-[1_0_0] h-[64px] min-h-px min-w-px relative" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[8px] items-center relative size-full">
        <Container147 />
        <Container148 />
      </div>
    </div>
  );
}

function Container150() {
  return (
    <div className="content-stretch flex h-[80px] items-center justify-between relative shrink-0 w-full" data-name="Container">
      <Container116 />
      <Container121 />
      <Container126 />
      <Container131 />
      <Container136 />
      <Container141 />
      <Container146 />
      <Container149 />
    </div>
  );
}

function Container151() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] h-[176px] items-start pb-0 pt-[16px] px-[32px] relative shrink-0 w-[1280px]" data-name="Container">
      <Container111 />
      <Container150 />
    </div>
  );
}

function App1() {
  return (
    <div className="absolute bg-[rgba(238,244,255,0.8)] content-stretch flex flex-col h-[176.667px] items-start left-0 pb-[0.667px] pt-0 px-[447px] top-0" data-name="App">
      <div aria-hidden="true" className="absolute border-[#dbeafe] border-[0px_0px_0.667px] border-solid inset-0 pointer-events-none" />
      <Container151 />
    </div>
  );
}

export default function AiCodeValidationLayer() {
  return (
    <div className="bg-[#f5f9ff] relative size-full" data-name="AI Code Validation Layer (복사)">
      <App />
      <Text24 />
      <App1 />
    </div>
  );
}