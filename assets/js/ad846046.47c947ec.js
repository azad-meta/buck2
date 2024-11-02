"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[1596],{39027:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>c,contentTitle:()=>a,default:()=>p,frontMatter:()=>i,metadata:()=>d,toc:()=>o});var s=r(74848),t=r(15680),l=r(28774);const i={},a="Starlark APIs",d={id:"api/starlark/index",title:"Starlark APIs",description:"False",source:"@site/../docs/api/starlark/index.md",sourceDirName:"api/starlark",slug:"/api/starlark/",permalink:"/docs/api/starlark/",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{},sidebar:"apiSidebar",previous:{title:"Rules",permalink:"/docs/prelude/globals"},next:{title:"bool",permalink:"/docs/api/starlark/bool"}},c={},o=[{value:"False",id:"false",level:2},{value:"None",id:"none",level:2},{value:"True",id:"true",level:2},{value:"abs",id:"abs",level:2},{value:"all",id:"all",level:2},{value:"any",id:"any",level:2},{value:"breakpoint",id:"breakpoint",level:2},{value:"call_stack",id:"call_stack",level:2},{value:"call_stack_frame",id:"call_stack_frame",level:2},{value:"chr",id:"chr",level:2},{value:"debug",id:"debug",level:2},{value:"dir",id:"dir",level:2},{value:"enum",id:"enum",level:2},{value:"enumerate",id:"enumerate",level:2},{value:"eval_type",id:"eval_type",level:2},{value:"fail",id:"fail",level:2},{value:"field",id:"field",level:2},{value:"filter",id:"filter",level:2},{value:"getattr",id:"getattr",level:2},{value:"hasattr",id:"hasattr",level:2},{value:"hash",id:"hash",level:2},{value:"isinstance",id:"isinstance",level:2},{value:"len",id:"len",level:2},{value:"map",id:"map",level:2},{value:"max",id:"max",level:2},{value:"min",id:"min",level:2},{value:"ord",id:"ord",level:2},{value:"partial",id:"partial",level:2},{value:"pprint",id:"pprint",level:2},{value:"prepr",id:"prepr",level:2},{value:"print",id:"print",level:2},{value:"pstr",id:"pstr",level:2},{value:"record",id:"record",level:2},{value:"repr",id:"repr",level:2},{value:"reversed",id:"reversed",level:2},{value:"set",id:"set",level:2},{value:"sorted",id:"sorted",level:2},{value:"zip",id:"zip",level:2}];function h(e){const n={a:"a",code:"code",h1:"h1",h2:"h2",header:"header",hr:"hr",li:"li",p:"p",pre:"pre",ul:"ul",...(0,t.useMDXComponents)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.header,{children:(0,s.jsx)(n.h1,{id:"starlark-apis",children:"Starlark APIs"})}),"\n",(0,s.jsx)(n.h2,{id:"false",children:"False"}),"\n",(0,s.jsx)("pre",{class:"language-python",children:(0,s.jsxs)("code",{children:["False: ",(0,s.jsx)(l.default,{to:"/docs/api/starlark/bool",children:"bool"})]})}),"\n",(0,s.jsx)(n.hr,{}),"\n",(0,s.jsx)(n.h2,{id:"none",children:"None"}),"\n",(0,s.jsx)("pre",{class:"language-python",children:(0,s.jsx)("code",{children:"None: None"})}),"\n",(0,s.jsx)(n.hr,{}),"\n",(0,s.jsx)(n.h2,{id:"true",children:"True"}),"\n",(0,s.jsx)("pre",{class:"language-python",children:(0,s.jsxs)("code",{children:["True: ",(0,s.jsx)(l.default,{to:"/docs/api/starlark/bool",children:"bool"})]})}),"\n",(0,s.jsx)(n.hr,{}),"\n",(0,s.jsx)(n.h2,{id:"abs",children:"abs"}),"\n",(0,s.jsx)("pre",{class:"language-python",children:(0,s.jsxs)("code",{children:["def abs(\nx: ",(0,s.jsx)(l.default,{to:"/docs/api/starlark/float",children:"float"})," | ",(0,s.jsx)(l.default,{to:"/docs/api/starlark/int",children:"int"}),",\n/,\n) -> ",(0,s.jsx)(l.default,{to:"/docs/api/starlark/float",children:"float"})," | ",(0,s.jsx)(l.default,{to:"/docs/api/starlark/int",children:"int"})]})}),"\n",(0,s.jsx)(n.p,{children:"Take the absolute value of an int."}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:"abs(0)   == 0\nabs(-10) == 10\nabs(10)  == 10\nabs(10.0) == 10.0\nabs(-12.34) == 12.34\n"})}),"\n",(0,s.jsx)(n.hr,{}),"\n",(0,s.jsx)(n.h2,{id:"all",children:"all"}),"\n",(0,s.jsx)("pre",{class:"language-python",children:(0,s.jsxs)("code",{children:["def all(x: typing.Iterable, /) -> ",(0,s.jsx)(l.default,{to:"/docs/api/starlark/bool",children:"bool"})]})}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.a,{href:"https://github.com/bazelbuild/starlark/blob/master/spec.md#all",children:"all"}),": returns true if all values in the iterable object have a truth value of true."]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:"all([1, True]) == True\nall([1, 1]) == True\nall([0, 1, True]) == False\nall([True, 1, True]) == True\nall([0, 0]) == False\nall([0, False]) == False\nall([True, 0]) == False\nall([1, False]) == False\n"})}),"\n",(0,s.jsx)(n.hr,{}),"\n",(0,s.jsx)(n.h2,{id:"any",children:"any"}),"\n",(0,s.jsx)("pre",{class:"language-python",children:(0,s.jsxs)("code",{children:["def any(x: typing.Iterable, /) -> ",(0,s.jsx)(l.default,{to:"/docs/api/starlark/bool",children:"bool"})]})}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.a,{href:"https://github.com/bazelbuild/starlark/blob/master/spec.md#any",children:"any"}),": returns true if any value in the iterable object have a truth value of true."]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:"any([0, True]) == True\nany([0, 1]) == True\nany([0, 1, True]) == True\nany([0, 0]) == False\nany([0, False]) == False\n"})}),"\n",(0,s.jsx)(n.hr,{}),"\n",(0,s.jsx)(n.h2,{id:"breakpoint",children:"breakpoint"}),"\n",(0,s.jsx)("pre",{class:"language-python",children:(0,s.jsx)("code",{children:"def breakpoint() -> None"})}),"\n",(0,s.jsx)(n.p,{children:"When a debugger is available, breaks into the debugger."}),"\n",(0,s.jsx)(n.hr,{}),"\n",(0,s.jsx)(n.h2,{id:"call_stack",children:"call_stack"}),"\n",(0,s.jsx)("pre",{class:"language-python",children:(0,s.jsxs)("code",{children:["def call_stack(\n*,\nstrip_frames: ",(0,s.jsx)(l.default,{to:"/docs/api/starlark/int",children:"int"})," = 0,\n) -> ",(0,s.jsx)(l.default,{to:"/docs/api/starlark/str",children:"str"})]})}),"\n",(0,s.jsx)(n.p,{children:"Get a textual representation of the call stack."}),"\n",(0,s.jsx)(n.p,{children:"This is intended only for debugging purposes to display to a human and\nshould not be considered stable or parseable."}),"\n",(0,s.jsxs)(n.p,{children:["strip_frames will pop N frames from the top of the call stack, which can\nbe useful to hide non-interesting lines - for example, strip_frames=1\nwill hide the call to and location of ",(0,s.jsx)(n.code,{children:"call_stack()"})," itself."]}),"\n",(0,s.jsx)(n.hr,{}),"\n",(0,s.jsx)(n.h2,{id:"call_stack_frame",children:"call_stack_frame"}),"\n",(0,s.jsx)("pre",{class:"language-python",children:(0,s.jsxs)("code",{children:["def call_stack_frame(\nn: ",(0,s.jsx)(l.default,{to:"/docs/api/starlark/int",children:"int"}),",\n/,\n) -> None | StackFrame"]})}),"\n",(0,s.jsx)(n.p,{children:"Get a structural representation of the n-th call stack frame."}),"\n",(0,s.jsxs)(n.p,{children:["With ",(0,s.jsx)(n.code,{children:"n=0"})," returns ",(0,s.jsx)(n.code,{children:"call_stack_frame"})," itself.\nReturns ",(0,s.jsx)(n.code,{children:"None"})," if ",(0,s.jsx)(n.code,{children:"n"})," is greater than or equal to the stack size."]}),"\n",(0,s.jsx)(n.hr,{}),"\n",(0,s.jsx)(n.h2,{id:"chr",children:"chr"}),"\n",(0,s.jsx)("pre",{class:"language-python",children:(0,s.jsxs)("code",{children:["def chr(\ni: ",(0,s.jsx)(l.default,{to:"/docs/api/starlark/int",children:"int"}),",\n/,\n) -> ",(0,s.jsx)(l.default,{to:"/docs/api/starlark/str",children:"str"})]})}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.a,{href:"https://github.com/bazelbuild/starlark/blob/master/spec.md#bool",children:"chr"}),": returns a string encoding a codepoint."]}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.code,{children:"chr(i)"})," returns a string that encodes the single Unicode code\npoint whose value is specified by the integer ",(0,s.jsx)(n.code,{children:"i"}),". ",(0,s.jsx)(n.code,{children:"chr"})," fails\nunless ",(0,s.jsx)(n.code,{children:"0 \u2264 i \u2264 0x10FFFF"}),"."]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:"chr(65) == 'A'\nchr(1049) == '\u0419'\nchr(0x1F63F) == '\ud83d\ude3f'\n"})}),"\n",(0,s.jsx)(n.hr,{}),"\n",(0,s.jsx)(n.h2,{id:"debug",children:"debug"}),"\n",(0,s.jsx)("pre",{class:"language-python",children:(0,s.jsxs)("code",{children:["def debug(val, /) -> ",(0,s.jsx)(l.default,{to:"/docs/api/starlark/str",children:"str"})]})}),"\n",(0,s.jsx)(n.p,{children:"Print the value with full debug formatting. The result may not be stable over time. Intended for debugging purposes and guaranteed to produce verbose output not suitable for user display."}),"\n",(0,s.jsx)(n.hr,{}),"\n",(0,s.jsx)(n.h2,{id:"dir",children:"dir"}),"\n",(0,s.jsx)("pre",{class:"language-python",children:(0,s.jsxs)("code",{children:["def dir(x, /) -> list[",(0,s.jsx)(l.default,{to:"/docs/api/starlark/str",children:"str"}),"]"]})}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.a,{href:"https://github.com/bazelbuild/starlark/blob/master/spec.md#dir",children:"dir"}),": list attributes of a value."]}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.code,{children:"dir(x)"})," returns a list of the names of the attributes (fields and\nmethods) of its operand. The attributes of a value ",(0,s.jsx)(n.code,{children:"x"})," are the names\n",(0,s.jsx)(n.code,{children:"f"})," such that ",(0,s.jsx)(n.code,{children:"x.f"})," is a valid expression."]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:'"capitalize" in dir("abc")\n'})}),"\n",(0,s.jsx)(n.hr,{}),"\n",(0,s.jsx)(n.h2,{id:"enum",children:"enum"}),"\n",(0,s.jsx)("pre",{class:"language-python",children:(0,s.jsxs)("code",{children:["def enum(*args: ",(0,s.jsx)(l.default,{to:"/docs/api/starlark/str",children:"str"}),")"]})}),"\n",(0,s.jsxs)(n.p,{children:["The ",(0,s.jsx)(n.code,{children:"enum"})," type represents one value picked from a set of values."]}),"\n",(0,s.jsx)(n.p,{children:"For example:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-python",children:'MyEnum = enum("option1", "option2", "option3")\n'})}),"\n",(0,s.jsxs)(n.p,{children:["This statement defines an enumeration ",(0,s.jsx)(n.code,{children:"MyEnum"})," that consists of the three values ",(0,s.jsx)(n.code,{children:'"option1"'}),", ",(0,s.jsx)(n.code,{children:'"option2"'})," and ",(0,s.jsx)(n.code,{children:"option3"}),"."]}),"\n",(0,s.jsxs)(n.p,{children:["Now ",(0,s.jsx)(n.code,{children:"MyEnum"})," is defined, it's possible to do the following:"]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["Create values of this type with ",(0,s.jsx)(n.code,{children:'MyEnum("option2")'}),". It is a runtime error if the argument is not one of the predeclared values of the enumeration."]}),"\n",(0,s.jsxs)(n.li,{children:["Get the type of the enum suitable for a type annotation with ",(0,s.jsx)(n.code,{children:"MyEnum"}),"."]}),"\n",(0,s.jsxs)(n.li,{children:["Given a value of the enum (for example, ",(0,s.jsx)(n.code,{children:'v = MyEnum("option2")'}),"), get the underlying value ",(0,s.jsx)(n.code,{children:'v.value == "option2"'})," or the index in the enumeration ",(0,s.jsx)(n.code,{children:"v.index == 1"}),"."]}),"\n",(0,s.jsxs)(n.li,{children:["Get a list of the values that make up the array with ",(0,s.jsx)(n.code,{children:'MyEnum.values() == ["option1", "option2", "option3"]'}),"."]}),"\n",(0,s.jsxs)(n.li,{children:["Treat ",(0,s.jsx)(n.code,{children:"MyEnum"})," a bit like an array, with ",(0,s.jsx)(n.code,{children:"len(MyEnum) == 3"}),", ",(0,s.jsx)(n.code,{children:'MyEnum[1] == MyEnum("option2")'})," and iteration over enums ",(0,s.jsx)(n.code,{children:'[x.value for x in MyEnum] == ["option1", "option2", "option3"]'}),"."]}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:"Enumeration types store each value once, which are then efficiently referenced by enumeration values."}),"\n",(0,s.jsx)(n.hr,{}),"\n",(0,s.jsx)(n.h2,{id:"enumerate",children:"enumerate"}),"\n",(0,s.jsx)("pre",{class:"language-python",children:(0,s.jsxs)("code",{children:["def enumerate(\nit: typing.Iterable,\n/,\nstart: ",(0,s.jsx)(l.default,{to:"/docs/api/starlark/int",children:"int"})," = 0,\n) -> list[(",(0,s.jsx)(l.default,{to:"/docs/api/starlark/int",children:"int"}),", typing.Any)]"]})}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.a,{href:"https://github.com/bazelbuild/starlark/blob/master/spec.md#enumerate",children:"enumerate"}),": return a list of (index, element) from an iterable."]}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.code,{children:"enumerate(x)"})," returns a list of ",(0,s.jsx)(n.code,{children:"(index, value)"})," pairs, each containing\nsuccessive values of the iterable sequence and the index of the\nvalue within the sequence."]}),"\n",(0,s.jsxs)(n.p,{children:["The optional second parameter, ",(0,s.jsx)(n.code,{children:"start"}),", specifies an integer value to\nadd to each index."]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:'enumerate(["zero", "one", "two"]) == [(0, "zero"), (1, "one"), (2, "two")]\nenumerate(["one", "two"], 1) == [(1, "one"), (2, "two")]\n'})}),"\n",(0,s.jsx)(n.hr,{}),"\n",(0,s.jsx)(n.h2,{id:"eval_type",children:"eval_type"}),"\n",(0,s.jsx)("pre",{class:"language-python",children:(0,s.jsx)("code",{children:"def eval_type(ty: type, /) -> type"})}),"\n",(0,s.jsx)(n.p,{children:"Create a runtime type object which can be used to check if a value matches the given type."}),"\n",(0,s.jsx)(n.hr,{}),"\n",(0,s.jsx)(n.h2,{id:"fail",children:"fail"}),"\n",(0,s.jsx)("pre",{class:"language-python",children:(0,s.jsx)("code",{children:"def fail(*args) -> typing.Never"})}),"\n",(0,s.jsx)(n.p,{children:"fail: fail the execution"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:'fail("this is an error")  # fail: this is an error\nfail("oops", 1, False)  # fail: oops 1 False\n'})}),"\n",(0,s.jsx)(n.hr,{}),"\n",(0,s.jsx)(n.h2,{id:"field",children:"field"}),"\n",(0,s.jsx)("pre",{class:"language-python",children:(0,s.jsx)("code",{children:"def field(typ, /, default = ...) -> field"})}),"\n",(0,s.jsxs)(n.p,{children:["Creates a field record. Used as an argument to the ",(0,s.jsx)(n.code,{children:"record"})," function."]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:'rec_type = record(host=field(str), port=field(int), mask=field(int, default=255))\nrec = rec_type(host="localhost", port=80)\nrec.port == 80\nrec.mask == 255\n'})}),"\n",(0,s.jsx)(n.hr,{}),"\n",(0,s.jsx)(n.h2,{id:"filter",children:"filter"}),"\n",(0,s.jsx)("pre",{class:"language-python",children:(0,s.jsx)("code",{children:"def filter(func: None | typing.Callable, seq: typing.Iterable, /) -> list"})}),"\n",(0,s.jsxs)(n.p,{children:["Apply a predicate to each element of the iterable, returning those that match. As a special case if the function is ",(0,s.jsx)(n.code,{children:"None"})," then removes all the ",(0,s.jsx)(n.code,{children:"None"})," values."]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:"filter(bool, [0, 1, False, True]) == [1, True]\nfilter(lambda x: x > 2, [1, 2, 3, 4]) == [3, 4]\nfilter(None, [True, None, False]) == [True, False]\n"})}),"\n",(0,s.jsx)(n.hr,{}),"\n",(0,s.jsx)(n.h2,{id:"getattr",children:"getattr"}),"\n",(0,s.jsx)("pre",{class:"language-python",children:(0,s.jsxs)("code",{children:["def getattr(\na,\nattr: ",(0,s.jsx)(l.default,{to:"/docs/api/starlark/str",children:"str"}),",\ndefault = ...,\n/,\n)"]})}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.a,{href:"https://github.com/bazelbuild/starlark/blob/master/spec.md#getattr",children:"getattr"}),": returns the value of an attribute"]}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.code,{children:"getattr(x, name)"})," returns the value of the attribute (field or method)\nof x named ",(0,s.jsx)(n.code,{children:"name"}),". It is a dynamic error if x has no such attribute."]}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.code,{children:'getattr(x, "f")'})," is equivalent to ",(0,s.jsx)(n.code,{children:"x.f"}),"."]}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.code,{children:'getattr(x, "f", d)'})," is equivalent to ",(0,s.jsx)(n.code,{children:'x.f if hasattr(x, "f") else d'}),"\nand will never raise an error."]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:'getattr("banana", "split")("a") == ["b", "n", "n", ""] # equivalent to "banana".split("a")\n'})}),"\n",(0,s.jsx)(n.hr,{}),"\n",(0,s.jsx)(n.h2,{id:"hasattr",children:"hasattr"}),"\n",(0,s.jsx)("pre",{class:"language-python",children:(0,s.jsxs)("code",{children:["def hasattr(\na,\nattr: ",(0,s.jsx)(l.default,{to:"/docs/api/starlark/str",children:"str"}),",\n/,\n) -> ",(0,s.jsx)(l.default,{to:"/docs/api/starlark/bool",children:"bool"})]})}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.a,{href:"https://github.com/bazelbuild/starlark/blob/master/spec.md#hasattr",children:"hasattr"}),": test if an object has an attribute"]}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.code,{children:"hasattr(x, name)"})," reports whether x has an attribute (field or method)\nnamed ",(0,s.jsx)(n.code,{children:"name"}),"."]}),"\n",(0,s.jsx)(n.hr,{}),"\n",(0,s.jsx)(n.h2,{id:"hash",children:"hash"}),"\n",(0,s.jsx)("pre",{class:"language-python",children:(0,s.jsxs)("code",{children:["def hash(\na: ",(0,s.jsx)(l.default,{to:"/docs/api/starlark/str",children:"str"}),",\n/,\n) -> ",(0,s.jsx)(l.default,{to:"/docs/api/starlark/int",children:"int"})]})}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.a,{href:"https://github.com/bazelbuild/starlark/blob/master/spec.md#hash",children:"hash"}),": returns the hash number of a value."]}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.code,{children:"hash(x)"})," returns an integer hash value for x such that ",(0,s.jsx)(n.code,{children:"x == y"}),"\nimplies ",(0,s.jsx)(n.code,{children:"hash(x) == hash(y)"}),"."]}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.code,{children:"hash"})," fails if x, or any value upon which its hash depends, is\nunhashable."]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:'hash("hello") != hash("world")\n'})}),"\n",(0,s.jsx)(n.hr,{}),"\n",(0,s.jsx)(n.h2,{id:"isinstance",children:"isinstance"}),"\n",(0,s.jsx)("pre",{class:"language-python",children:(0,s.jsxs)("code",{children:["def isinstance(\nvalue,\nty: type,\n/,\n) -> ",(0,s.jsx)(l.default,{to:"/docs/api/starlark/bool",children:"bool"})]})}),"\n",(0,s.jsx)(n.p,{children:"Check if a value matches the given type."}),"\n",(0,s.jsx)(n.p,{children:"This operation can be very fast or very slow depending on how it is used."}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.code,{children:"isinstance(x, list)"})," is very fast,\nbecause it is compiled to a special bytecode instruction."]}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.code,{children:"isinstance(x, list[str])"})," is ",(0,s.jsx)(n.code,{children:"O(N)"})," operation\nbecause it checks every element in this list."]}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.code,{children:"L = list; [isinstance(x, L) for x in y]"})," is slow when ",(0,s.jsx)(n.code,{children:"L"})," is not a constant:\n",(0,s.jsx)(n.code,{children:"isinstance()"})," first converts ",(0,s.jsx)(n.code,{children:"list"})," to a type in a loop, which is slow."]}),"\n",(0,s.jsxs)(n.p,{children:["But last operation can be optimized like this:\n",(0,s.jsx)(n.code,{children:"L = eval_type(list); [isinstance(x, L) for x in y]"}),":\n",(0,s.jsx)(n.code,{children:"eval_type()"})," converts ",(0,s.jsx)(n.code,{children:"list"})," value into prepared type matcher."]}),"\n",(0,s.jsx)(n.hr,{}),"\n",(0,s.jsx)(n.h2,{id:"len",children:"len"}),"\n",(0,s.jsx)("pre",{class:"language-python",children:(0,s.jsxs)("code",{children:["def len(a, /) -> ",(0,s.jsx)(l.default,{to:"/docs/api/starlark/int",children:"int"})]})}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.a,{href:"https://github.com/bazelbuild/starlark/blob/master/spec.md#len",children:"len"}),": get the length of a sequence"]}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.code,{children:"len(x)"})," returns the number of elements in its argument."]}),"\n",(0,s.jsx)(n.p,{children:"It is a dynamic error if its argument is not a sequence."}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:"len(()) == 0\nlen({}) == 0\nlen([]) == 0\nlen([1]) == 1\nlen([1,2]) == 2\nlen({'16': 10}) == 1\nlen(True)    # error: not supported\n"})}),"\n",(0,s.jsx)(n.hr,{}),"\n",(0,s.jsx)(n.h2,{id:"map",children:"map"}),"\n",(0,s.jsx)("pre",{class:"language-python",children:(0,s.jsx)("code",{children:"def map(func: typing.Callable, seq: typing.Iterable, /) -> list"})}),"\n",(0,s.jsx)(n.p,{children:"Apply a function to each element of the iterable, returning the results."}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:"map(abs, [7, -5, -6]) == [7, 5, 6]\nmap(lambda x: x * 2, [1, 2, 3, 4]) == [2, 4, 6, 8]\n"})}),"\n",(0,s.jsx)(n.hr,{}),"\n",(0,s.jsx)(n.h2,{id:"max",children:"max"}),"\n",(0,s.jsx)("pre",{class:"language-python",children:(0,s.jsx)("code",{children:"def max(*args, key = ...)"})}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.a,{href:"https://github.com/bazelbuild/starlark/blob/master/spec.md#max",children:"max"}),": returns the maximum of a sequence."]}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.code,{children:"max(x)"})," returns the greatest element in the iterable sequence x."]}),"\n",(0,s.jsx)(n.p,{children:"It is an error if any element does not support ordered comparison,\nor if the sequence is empty."}),"\n",(0,s.jsxs)(n.p,{children:["The optional named parameter ",(0,s.jsx)(n.code,{children:"key"})," specifies a function to be applied\nto each element prior to comparison."]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:'max([3, 1, 4, 1, 5, 9])               == 9\nmax("two", "three", "four")           == "two"    # the lexicographically greatest\nmax("two", "three", "four", key=len)  == "three"  # the longest\n'})}),"\n",(0,s.jsx)(n.hr,{}),"\n",(0,s.jsx)(n.h2,{id:"min",children:"min"}),"\n",(0,s.jsx)("pre",{class:"language-python",children:(0,s.jsx)("code",{children:"def min(*args, key = ...)"})}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.a,{href:"https://github.com/bazelbuild/starlark/blob/master/spec.md#min",children:"min"}),": returns the minimum of a sequence."]}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.code,{children:"min(x)"})," returns the least element in the iterable sequence x."]}),"\n",(0,s.jsx)(n.p,{children:"It is an error if any element does not support ordered comparison,\nor if the sequence is empty."}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:'min([3, 1, 4, 1, 5, 9])                 == 1\nmin("two", "three", "four")             == "four"  # the lexicographically least\nmin("two", "three", "four", key=len)    == "two"   # the shortest\n'})}),"\n",(0,s.jsx)(n.hr,{}),"\n",(0,s.jsx)(n.h2,{id:"ord",children:"ord"}),"\n",(0,s.jsx)("pre",{class:"language-python",children:(0,s.jsxs)("code",{children:["def ord(\na: ",(0,s.jsx)(l.default,{to:"/docs/api/starlark/str",children:"str"}),",\n/,\n) -> ",(0,s.jsx)(l.default,{to:"/docs/api/starlark/int",children:"int"})]})}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.a,{href:"https://github.com/bazelbuild/starlark/blob/master/spec.md#ord",children:"ord"}),": returns the codepoint of a character"]}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.code,{children:"ord(s)"})," returns the integer value of the sole Unicode code point\nencoded by the string ",(0,s.jsx)(n.code,{children:"s"}),"."]}),"\n",(0,s.jsxs)(n.p,{children:["If ",(0,s.jsx)(n.code,{children:"s"})," does not encode exactly one Unicode code point, ",(0,s.jsx)(n.code,{children:"ord"})," fails.\nEach invalid code within the string is treated as if it encodes the\nUnicode replacement character, U+FFFD."]}),"\n",(0,s.jsx)(n.p,{children:"Example:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:'ord("A")                                == 65\nord("\u0419")                                == 1049\nord("\ud83d\ude3f")                               == 0x1F63F\n'})}),"\n",(0,s.jsx)(n.hr,{}),"\n",(0,s.jsx)(n.h2,{id:"partial",children:"partial"}),"\n",(0,s.jsx)("pre",{class:"language-python",children:(0,s.jsx)("code",{children:"def partial(func, /, *args, **kwargs) -> function"})}),"\n",(0,s.jsxs)(n.p,{children:["Construct a partial application. In almost all cases it is simpler to use a ",(0,s.jsx)(n.code,{children:"lamdba"}),"."]}),"\n",(0,s.jsx)(n.hr,{}),"\n",(0,s.jsx)(n.h2,{id:"pprint",children:"pprint"}),"\n",(0,s.jsx)("pre",{class:"language-python",children:(0,s.jsx)("code",{children:"def pprint(*args) -> None"})}),"\n",(0,s.jsx)(n.hr,{}),"\n",(0,s.jsx)(n.h2,{id:"prepr",children:"prepr"}),"\n",(0,s.jsx)("pre",{class:"language-python",children:(0,s.jsxs)("code",{children:["def prepr(a, /) -> ",(0,s.jsx)(l.default,{to:"/docs/api/starlark/str",children:"str"})]})}),"\n",(0,s.jsxs)(n.p,{children:["Like ",(0,s.jsx)(n.code,{children:"repr"}),", but produces more verbose pretty-printed output"]}),"\n",(0,s.jsx)(n.hr,{}),"\n",(0,s.jsx)(n.h2,{id:"print",children:"print"}),"\n",(0,s.jsx)("pre",{class:"language-python",children:(0,s.jsx)("code",{children:"def print(*args) -> None"})}),"\n",(0,s.jsx)(n.p,{children:"Print some values to the output."}),"\n",(0,s.jsx)(n.hr,{}),"\n",(0,s.jsx)(n.h2,{id:"pstr",children:"pstr"}),"\n",(0,s.jsx)("pre",{class:"language-python",children:(0,s.jsxs)("code",{children:["def pstr(a, /) -> ",(0,s.jsx)(l.default,{to:"/docs/api/starlark/str",children:"str"})]})}),"\n",(0,s.jsxs)(n.p,{children:["Like ",(0,s.jsx)(n.code,{children:"str"}),", but produces more verbose pretty-printed output"]}),"\n",(0,s.jsx)(n.hr,{}),"\n",(0,s.jsx)(n.h2,{id:"record",children:"record"}),"\n",(0,s.jsx)("pre",{class:"language-python",children:(0,s.jsx)("code",{children:"def record(**kwargs) -> function"})}),"\n",(0,s.jsxs)(n.p,{children:["A ",(0,s.jsx)(n.code,{children:"record"})," type represents a set of named values, each with their own type."]}),"\n",(0,s.jsx)(n.p,{children:"For example:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-python",children:"MyRecord = record(host=str, port=int)\n"})}),"\n",(0,s.jsxs)(n.p,{children:["This above statement defines a record ",(0,s.jsx)(n.code,{children:"MyRecord"})," with 2 fields, the first named ",(0,s.jsx)(n.code,{children:"host"})," that must be of type ",(0,s.jsx)(n.code,{children:"str"}),", and the second named ",(0,s.jsx)(n.code,{children:"port"})," that must be of type ",(0,s.jsx)(n.code,{children:"int"}),"."]}),"\n",(0,s.jsxs)(n.p,{children:["Now ",(0,s.jsx)(n.code,{children:"MyRecord"})," is defined, it's possible to do the following:"]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["Create values of this type with ",(0,s.jsx)(n.code,{children:'MyRecord(host="localhost", port=80)'}),". It is a runtime error if any arguments are missed, of the wrong type, or if any unexpected arguments are given."]}),"\n",(0,s.jsxs)(n.li,{children:["Get the type of the record suitable for a type annotation with ",(0,s.jsx)(n.code,{children:"MyRecord.type"}),"."]}),"\n",(0,s.jsxs)(n.li,{children:["Get the fields of the record. For example, ",(0,s.jsx)(n.code,{children:'v = MyRecord(host="localhost", port=80)'})," will provide ",(0,s.jsx)(n.code,{children:'v.host == "localhost"'})," and ",(0,s.jsx)(n.code,{children:"v.port == 80"}),". Similarly, ",(0,s.jsx)(n.code,{children:'dir(v) == ["host", "port"]'}),"."]}),"\n"]}),"\n",(0,s.jsxs)(n.p,{children:["It is also possible to specify default values for parameters using the ",(0,s.jsx)(n.code,{children:"field"})," function."]}),"\n",(0,s.jsx)(n.p,{children:"For example:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-python",children:"MyRecord = record(host=str, port=field(int, 80))\n"})}),"\n",(0,s.jsxs)(n.p,{children:["Now the ",(0,s.jsx)(n.code,{children:"port"})," field can be omitted, defaulting to ",(0,s.jsx)(n.code,{children:"80"})," is not present (for example, ",(0,s.jsx)(n.code,{children:'MyRecord(host="localhost").port == 80'}),")."]}),"\n",(0,s.jsx)(n.p,{children:"Records are stored deduplicating their field names, making them more memory efficient than dictionaries."}),"\n",(0,s.jsx)(n.hr,{}),"\n",(0,s.jsx)(n.h2,{id:"repr",children:"repr"}),"\n",(0,s.jsx)("pre",{class:"language-python",children:(0,s.jsxs)("code",{children:["def repr(a, /) -> ",(0,s.jsx)(l.default,{to:"/docs/api/starlark/str",children:"str"})]})}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.a,{href:"https://github.com/bazelbuild/starlark/blob/master/spec.md#repr",children:"repr"}),": formats its argument as a string."]}),"\n",(0,s.jsx)(n.p,{children:"All strings in the result are double-quoted."}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:'repr(1)                 == \'1\'\nrepr("x")               == "\\"x\\""\nrepr([1, "x"])          == "[1, \\"x\\"]"\nrepr("test \\"\'")        == "\\"test \\\\\\"\'\\""\nrepr("x\\"y\ud83d\ude3f \\\\\'")      == "\\"x\\\\\\"y\\\\U0001f63f \\\\\\\\\'\\""\n'})}),"\n",(0,s.jsx)(n.hr,{}),"\n",(0,s.jsx)(n.h2,{id:"reversed",children:"reversed"}),"\n",(0,s.jsx)("pre",{class:"language-python",children:(0,s.jsx)("code",{children:"def reversed(a: typing.Iterable, /) -> list"})}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.a,{href:"https://github.com/bazelbuild/starlark/blob/master/spec.md#reversed",children:"reversed"}),": reverse a sequence"]}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.code,{children:"reversed(x)"})," returns a new list containing the elements of the iterable\nsequence x in reverse order."]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:'reversed([\'a\', \'b\', \'c\'])              == [\'c\', \'b\', \'a\']\nreversed(range(5))                     == [4, 3, 2, 1, 0]\nreversed("stressed".elems())           == ["d", "e", "s", "s", "e", "r", "t", "s"]\nreversed({"one": 1, "two": 2}.keys())  == ["two", "one"]\n'})}),"\n",(0,s.jsx)(n.hr,{}),"\n",(0,s.jsx)(n.h2,{id:"set",children:"set"}),"\n",(0,s.jsx)("pre",{class:"language-python",children:(0,s.jsx)("code",{children:"def set(arg: typing.Iterable = ..., /) -> set[typing.Any]"})}),"\n",(0,s.jsx)(n.hr,{}),"\n",(0,s.jsx)(n.h2,{id:"sorted",children:"sorted"}),"\n",(0,s.jsx)("pre",{class:"language-python",children:(0,s.jsxs)("code",{children:["def sorted(\nx: typing.Iterable,\n/,\n*,\nkey = ...,\nreverse: ",(0,s.jsx)(l.default,{to:"/docs/api/starlark/bool",children:"bool"})," = False,\n) -> list"]})}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.a,{href:"https://github.com/bazelbuild/starlark/blob/master/spec.md#sorted",children:"sorted"}),": sort a sequence"]}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.code,{children:"sorted(x)"})," returns a new list containing the elements of the iterable\nsequence x, in sorted order.  The sort algorithm is stable."]}),"\n",(0,s.jsxs)(n.p,{children:["The optional named parameter ",(0,s.jsx)(n.code,{children:"reverse"}),", if true, causes ",(0,s.jsx)(n.code,{children:"sorted"})," to\nreturn results in reverse sorted order."]}),"\n",(0,s.jsxs)(n.p,{children:["The optional named parameter ",(0,s.jsx)(n.code,{children:"key"})," specifies a function of one\nargument to apply to obtain the value's sort key.\nThe default behavior is the identity function."]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:'sorted([3, 1, 4, 1, 5, 9])                               == [1, 1, 3, 4, 5, 9]\nsorted([3, 1, 4, 1, 5, 9], reverse=True)                 == [9, 5, 4, 3, 1, 1]\nsorted(["two", "three", "four"], key=len)                == ["two", "four", "three"] # shortest to longest\nsorted(["two", "three", "four"], key=len, reverse=True)  == ["three", "four", "two"] # longest to shortest\n'})}),"\n",(0,s.jsx)(n.hr,{}),"\n",(0,s.jsx)(n.h2,{id:"zip",children:"zip"}),"\n",(0,s.jsx)("pre",{class:"language-python",children:(0,s.jsx)("code",{children:"def zip(*args: typing.Iterable) -> list"})}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.a,{href:"https://github.com/bazelbuild/starlark/blob/master/spec.md#zip",children:"zip"}),": zip several iterables together"]}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.code,{children:"zip()"})," returns a new list of n-tuples formed from corresponding\nelements of each of the n iterable sequences provided as arguments to\n",(0,s.jsx)(n.code,{children:"zip"}),".  That is, the first tuple contains the first element of each of\nthe sequences, the second element contains the second element of each\nof the sequences, and so on.  The result list is only as long as the\nshortest of the input sequences."]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:'zip()                           == []\nzip(range(5))                   == [(0,), (1,), (2,), (3,), (4,)]\nzip(range(5), "abc".elems())    == [(0, "a"), (1, "b"), (2, "c")]\n'})})]})}function p(e={}){const{wrapper:n}={...(0,t.useMDXComponents)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(h,{...e})}):h(e)}},15680:(e,n,r)=>{r.r(n),r.d(n,{MDXContext:()=>c,MDXProvider:()=>p,mdx:()=>f,useMDXComponents:()=>h,withMDXComponents:()=>o});var s=r(96540);function t(e,n,r){return n in e?Object.defineProperty(e,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[n]=r,e}function l(){return l=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var r=arguments[n];for(var s in r)Object.prototype.hasOwnProperty.call(r,s)&&(e[s]=r[s])}return e},l.apply(this,arguments)}function i(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);n&&(s=s.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),r.push.apply(r,s)}return r}function a(e){for(var n=1;n<arguments.length;n++){var r=null!=arguments[n]?arguments[n]:{};n%2?i(Object(r),!0).forEach((function(n){t(e,n,r[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))}))}return e}function d(e,n){if(null==e)return{};var r,s,t=function(e,n){if(null==e)return{};var r,s,t={},l=Object.keys(e);for(s=0;s<l.length;s++)r=l[s],n.indexOf(r)>=0||(t[r]=e[r]);return t}(e,n);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(s=0;s<l.length;s++)r=l[s],n.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(t[r]=e[r])}return t}var c=s.createContext({}),o=function(e){return function(n){var r=h(n.components);return s.createElement(e,l({},n,{components:r}))}},h=function(e){var n=s.useContext(c),r=n;return e&&(r="function"==typeof e?e(n):a(a({},n),e)),r},p=function(e){var n=h(e.components);return s.createElement(c.Provider,{value:n},e.children)},x="mdxType",u={inlineCode:"code",wrapper:function(e){var n=e.children;return s.createElement(s.Fragment,{},n)}},j=s.forwardRef((function(e,n){var r=e.components,t=e.mdxType,l=e.originalType,i=e.parentName,c=d(e,["components","mdxType","originalType","parentName"]),o=h(r),p=t,x=o["".concat(i,".").concat(p)]||o[p]||u[p]||l;return r?s.createElement(x,a(a({ref:n},c),{},{components:r})):s.createElement(x,a({ref:n},c))}));function f(e,n){var r=arguments,t=n&&n.mdxType;if("string"==typeof e||t){var l=r.length,i=new Array(l);i[0]=j;var a={};for(var d in n)hasOwnProperty.call(n,d)&&(a[d]=n[d]);a.originalType=e,a[x]="string"==typeof e?e:t,i[1]=a;for(var c=2;c<l;c++)i[c]=r[c];return s.createElement.apply(null,i)}return s.createElement.apply(null,r)}j.displayName="MDXCreateElement"}}]);