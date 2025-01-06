import React from 'react';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { vscDarkPlus } from 'react-syntax-highlighter/dist/cjs/styles/prism';
import data from "../../data/portfolio.json";
import Cursor from "../../components/Cursor";
import Header from "../../components/Header";
import Head from "next/head";

const CompilerProjectPage = () => {
    return (
        <>
        {data.showCursor && <Cursor />}
        <Head>
          <title>Blog</title>
        </Head>
        <div
          className={`container mx-auto mb-10 ${
            data.showCursor && "cursor-none"
          }`}
        >
          <Header isBlog={true}></Header>
            </div>
        <div className="bg-gray-100 min-h-screen py-10 px-6">
            <div className="max-w-4xl mx-auto bg-white shadow-md rounded-lg p-8">
                {/* Header */}
                <header className="text-center mb-8">
                    <h1 className="text-4xl font-bold text-gray-800">C++ Compiler Project</h1>
                    <p className="text-gray-600 mt-2">
                        A custom compiler built during my undergraduate studies to compile a subset of C++ into MIPS assembly.
                    </p>
                </header>

                {/* Introduction */}
                <section className="mb-8">
                    <h2 className="text-2xl font-semibold text-gray-800">Introduction</h2>
                    <p className="text-gray-700 mt-4">
                        This project implements a custom C++ compiler that translates source code into MIPS assembly. It was designed to showcase fundamental compiler design principles, including lexical analysis, parsing, semantic validation, and assembly code generation.
                    </p>
                </section>

                {/* Running the Project */}
                <section className="mb-8">
                    <h2 className="text-2xl font-semibold text-gray-800">Running the Project</h2>
                    <p className="text-gray-700 mt-4">
                        The project is designed to run on the **student server environment**. Use the following sequence of commands to compile and execute a program:
                    </p>
                    <SyntaxHighlighter language="bash" style={vscDarkPlus}>
                        {`wlp4scan < input.wlp4 | wlp4parse | wlp4type > input.wlp4ti
./wlp4gen < input.wlp4ti > output.asm
cs241.linkasm < output.asm > output.merl
cs241.linker output.merl print.merl alloc.merl > linked.merl
cs241.merl 0 < linked.merl > final.mips 2> /dev/null
mips.twoints final.mips`}
                    </SyntaxHighlighter>
                    <p className="text-gray-700 mt-4">
                        Note: The system has not been tested outside the student environment.
                    </p>
                </section>

                {/* Type Checking */}
                <section className="mb-8">
                    <h2 className="text-2xl font-semibold text-gray-800">Type Checking</h2>
                    <p className="text-gray-700 mt-4">
                        Type checking is a crucial phase ensuring correctness in variable usage, function calls, and pointer handling. The following function demonstrates the approach used:
                    </p>
                    <SyntaxHighlighter language="cpp" style={vscDarkPlus}>
                        {`std::string typeCheck(const Node* node, std::string id, 
                        std::map<std::string, std::vector<std::string>> procedures,
                        std::map<std::string, std::vector<std::pair<std::string, std::string>>> variables) {
  if (node->value == "NUM") return "int";
  else if (node->value == "NULL") return "int*";
  else if (node->value == "factor") {
    /* Handles nested expressions and dereferences */
  }
  return "";
}`}
                    </SyntaxHighlighter>
                    <p className="text-gray-700 mt-4">
                        Features of this implementation include:
                    </p>
                    <ul className="list-disc list-inside text-gray-700">
                        <li>Validation of declared variables and types.</li>
                        <li>Matching function arguments with their signatures.</li>
                        <li>Handling advanced scenarios like pointer dereferencing and arithmetic.</li>
                    </ul>
                </section>

                {/* Code Generation */}
                <section className="mb-8">
                    <h2 className="text-2xl font-semibold text-gray-800">Code Generation</h2>
                    <p className="text-gray-700 mt-4">
                        {"The compiler's final phase translates the Abstract Syntax Tree (AST) into MIPS assembly. Below is an example handling arithmetic expressions:"}
                    </p>
                    <SyntaxHighlighter language="cpp" style={vscDarkPlus}>
                        {`if (node->value == "PLUS") {
  code(node->children[0], ...); // Generate code for left operand
  code(node->children[2], ...); // Generate code for right operand
  std::cout << "add $3, $5, $3" << std::endl;
  node->type = "int";
}`}
                    </SyntaxHighlighter>
                    <p className="text-gray-700 mt-4">
                        Key highlights include:
                    </p>
                    <ul className="list-disc list-inside text-gray-700">
                        <li>Support for pointer arithmetic and dereferencing.</li>
                        <li>Control flow generation (e.g., loops and conditionals).</li>
                        <li>Efficient stack management for function calls.</li>
                    </ul>
                </section>

                {/* Challenges and Approaches */}
                <section className="mb-8">
                    <h2 className="text-2xl font-semibold text-gray-800">Challenges and Approaches</h2>
                    <p className="text-gray-700 mt-4">
                        Key challenges faced during this project included:
                    </p>
                    <ul className="list-disc list-inside text-gray-700">
                        <li>Handling left-recursive grammar in parsing.</li>
                        <li>Managing variable scope and stack offsets during code generation.</li>
                        <li>Debugging complex MIPS assembly output for correctness.</li>
                    </ul>
                    <p className="text-gray-700 mt-4">
                        Approaches to address these challenges:
                    </p>
                    <ul className="list-disc list-inside text-gray-700">
                        <li>Rewriting the grammar to remove left recursion for easier parsing.</li>
                        <li>Using clear mappings for symbol tables and procedure variables.</li>
                        <li>Conducting extensive tests with various input programs.</li>
                    </ul>
                </section>


                <section className="mb-8">
                    <h2 className="text-2xl font-semibold text-gray-800">Final Product</h2>
                    <p className="text-gray-700 mt-4">
                        The compiler successfully translates C++ programs into MIPS assembly with the following components:
                    </p>
                    <ul className="list-disc list-inside text-gray-700">
                        <li><b>Lexer</b>: Tokenizes the source code into symbols.</li>
                        <li><b>Parser</b>: Constructs an Abstract Syntax Tree (AST) based on grammar rules.</li>
                        <li><b>Semantic Analyzer</b>: Validates types, function calls, and scopes.</li>
                        <li><b>Code Generator</b>: Produces optimized MIPS assembly for execution.</li>
                    </ul>
                    <p className="text-gray-700 mt-4">
                        {"Future plans include extending the compiler's functionality and testing in a broader environment."}
                    </p>
                </section>

                {/* Footer */}
                <footer className="text-center mt-8">
                    <p className="text-gray-600">© 2025 Brian Seo | Undergraduate Project</p>
                </footer>
            </div>
        </div>
        </>
    );
};

export default CompilerProjectPage;
