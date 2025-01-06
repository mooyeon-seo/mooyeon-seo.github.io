import React from 'react';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { vscDarkPlus } from 'react-syntax-highlighter/dist/cjs/styles/prism';
import data from "../../data/portfolio.json";
import Cursor from "../../components/Cursor";
import Header from "../../components/Header";
import Head from "next/head";

const OS161ProjectPage = () => {
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
                    <h1 className="text-4xl font-bold text-gray-800">OS/161 Project</h1>
                    <p className="text-gray-600 mt-2">
                        An undergraduate project implementing key system calls and virtual memory in the OS/161 kernel.
                    </p>
                </header>

                {/* Introduction */}
                <section className="mb-8">
                    <h2 className="text-2xl font-semibold text-gray-800">Introduction</h2>
                    <p className="text-gray-700 mt-4">
                        This project focuses on enhancing the <b>OS/161 kernel</b> by implementing critical system calls and virtual memory management. Key features include enabling concurrency with the `fork` and `waitpid` system calls and optimizing memory usage with demand paging and the Translation Lookaside Buffer (TLB).
                    </p>
                </section>

                {/* Key Features */}
                <section className="mb-8">
                    <h2 className="text-2xl font-semibold text-gray-800">Key Features</h2>
                    <ul className="list-disc list-inside text-gray-700 mt-4">
                        <li>Implemented `fork` to allow process creation and enable concurrency.</li>
                        <li>Added `waitpid` for parent-child synchronization.</li>
                        <li>Developed virtual memory mechanisms, including page tables, demand paging, and TLB management.</li>
                    </ul>
                </section>

                {/* System Calls */}
                <section className="mb-8">
                    <h2 className="text-2xl font-semibold text-gray-800">System Calls</h2>
                    <p className="text-gray-700 mt-4">
                        Implementing `fork` and `waitpid` was crucial to enabling concurrency in the OS/161 kernel. Below is an abstracted snippet demonstrating the `fork` implementation:
                    </p>
                    <SyntaxHighlighter language="c" style={vscDarkPlus}>
                        {`int sys_fork(struct trapframe *tf, pid_t *retval) {
    // Create a new process structure
    struct proc *child_proc = proc_create_runprogram(curproc->p_name);
    if (child_proc == NULL) return ENOMEM;

    // Create and copy the address space
    struct addrspace *child_as;
    int err = as_copy(curproc_getas(), &child_as);
    if (err) return err;

    child_proc->p_addrspace = child_as;

    // Create a new trapframe
    struct trapframe *child_tf = kmalloc(sizeof(struct trapframe));
    if (child_tf == NULL) return ENOMEM;
    memcpy(child_tf, tf, sizeof(struct trapframe));

    // Create a new thread for the child process
    thread_fork(curthread->t_name, child_proc, enter_forked_process, child_tf, 0);

    *retval = child_proc->p_pid;
    return 0;
}`}
                    </SyntaxHighlighter>
                    <p className="text-gray-700 mt-4">
                        Key aspects of the implementation:
                    </p>
                    <ul className="list-disc list-inside text-gray-700">
                        <li>Cloning the parent’s address space and trapframe for the child process.</li>
                        <li>Creating a new thread for the child process with `thread_fork`.</li>
                        <li>Returning the child’s process ID (`pid`) to the parent process.</li>
                    </ul>
                </section>

                <section className="mb-8">
                    <h2 className="text-2xl font-semibold text-gray-800">Virtual Memory</h2>
                    <p className="text-gray-700 mt-4">
                        Virtual memory was implemented using a combination of page tables, demand paging, and TLB management. The following snippet demonstrates handling TLB faults:
                    </p>
                    <SyntaxHighlighter language="c" style={vscDarkPlus}>
                        {`int vm_fault(int faulttype, vaddr_t faultaddress) {
            struct addrspace *as = curproc_getas();
            if (as == NULL) return EFAULT;

            faultaddress &= PAGE_FRAME;
            struct page_entry *page = page_table_lookup(as->pt, faultaddress);
            if (page == NULL) {
            // Allocate and load the page on demand
            page = allocate_page(as, faultaddress);
            if (page == NULL) return ENOMEM;
            }

            // Insert into the TLB
            int tlb_err = tlb_insert(faultaddress, page->paddr);
            if (tlb_err) return EFAULT;

            return 0;
        }`}
                    </SyntaxHighlighter>
                    <p className="text-gray-700 mt-4">
                        Highlights:
                    </p>
                    <ul className="list-disc list-inside text-gray-700">
                        <li><b>Page Table Lookup</b>: Checks if the page is already loaded.</li>
                        <li><b>Demand Paging</b>: Allocates memory for a page if it's not found in the table.</li>
                        <li><b>TLB Management</b>: Inserts the physical address into the TLB for fast future access.</li>
                    </ul>
                </section>

                {/* Challenges and Solutions */}
                <section className="mb-8">
                    <h2 className="text-2xl font-semibold text-gray-800">Challenges and Solutions</h2>
                    <p className="text-gray-700 mt-4">
                        Key challenges faced during the project included:
                    </p>
                    <ul className="list-disc list-inside text-gray-700">
                        <li>Ensuring thread safety when handling concurrent processes.</li>
                        <li>Efficiently managing limited physical memory during demand paging.</li>
                        <li>Debugging TLB faults and ensuring correct page mappings.</li>
                    </ul>
                    <p className="text-gray-700 mt-4">
                        Solutions implemented:
                    </p>
                    <ul className="list-disc list-inside text-gray-700">
                        <li>Utilized locks and condition variables for safe process synchronization.</li>
                        <li>Implemented an eviction policy for page replacement in case of memory shortages.</li>
                        <li>Used step-by-step simulation to debug and verify virtual memory operations.</li>
                    </ul>
                </section>

                {/* Final Outcome */}
                <section className="mb-8">
                    <h2 className="text-2xl font-semibold text-gray-800">Final Outcome</h2>
                    <p className="text-gray-700 mt-4">
                        The enhanced OS/161 kernel supports process concurrency and efficient memory usage. Key achievements include:
                    </p>
                    <ul className="list-disc list-inside text-gray-700">
                        <li>Successful implementation of `fork`, `waitpid`, and process synchronization.</li>
                        <li>Robust virtual memory with demand paging and TLB management.</li>
                        <li>Improved system performance through efficient memory allocation and replacement strategies.</li>
                    </ul>
                    <p className="text-gray-700 mt-4">
                        Future work could involve extending the kernel to handle advanced features like shared memory and inter-process communication (IPC).
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

export default OS161ProjectPage;
