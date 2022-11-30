import React from 'react';

const Blogs = () => {
    return (
        <section className=" ">
            <h2 className='text-center font-semibold text-4xl mt-5'>Blogs</h2>
            <div className="divider"></div>

            <div className="container max-w-6xl p-6 mx-auto space-y-6 sm:space-y-12">
                {/* blog 1 */}
                <article className="p-6 space-y-2 lg:col-span-5">
                    <h3 className="text-2xl font-semibold sm:text-4xl group-hover:underline group-focus:underline">What are the different ways to manage a state in a React application?</h3>
                    <span className="text-xs ">November 27, 2022</span>
                    <img src="https://miro.medium.com/max/1200/1*hYSKyofnqThnPIsYRfnUUQ.png" alt="" className="object-cover w-full h-64 rounded sm:h-96 lg:col-span-7 " />
                    <p>
                        In React apps, there are at many ways to handle the state. Local useState, Lifted useState, React Context.
                        <br />
                        <span className='text-secondary'>Local useState</span> is a Hook (function) that allows you to have state variables in functional components. You pass the initial state to this function and it returns a variable with the current state value. <span className='text-secondary'>Lifted useState</span> define the state in the parent component. Often, the same state is used across multiple components. In those cases, it is useful to lift the state to a common parent. <span className='text-secondary'>React Context</span> is primarily used when some data needs to be accessible by many components at different nesting levels.
                    </p>
                </article>
                {/* blog 2 */}
                <article className="p-6 space-y-2 lg:col-span-5">
                    <h3 className="text-2xl font-semibold sm:text-4xl group-hover:underline group-focus:underline">How does prototypical inheritance work?</h3>
                    <span className="text-xs ">November 27, 2022</span>
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTB3sm24PddL3wzvY_CDvfPuXmqhcClyxMWv-o2MXAueoYcIQEzRBJxkX_7KOQWp0hIEUA&usqp=CAU" alt="" className="object-cover w-full h-64 rounded sm:h-96 lg:col-span-7 " />
                    <p>
                        Prototypical inheritance refers to the ability to access object properties from another object.
                        <br />
                        Every function (whether it is normal or constructor function) in JavaScript has a special property known as prototype property. Every time you create a function, automatically this prototype becomes the property of that function. The prototype property of function is useful only when you are creating objects out of this function. This prototype property is by default an empty object, for which properties and methods or even other objects can be added. Later this properties and methods added can be used by any instance object created by this constructor function.Here, comes the concept of inheritance. In JavaScript , there is only prototype-based inheritance and not the class based inheritance. In JavaScript, inheritance is nothing but an object can inherit properties and methods from other object i.e, allowing instance object to inherit properties and methods from its constructor function prototype property
                    </p>
                </article>
                {/* blog 3 */}
                <article className="p-6 space-y-2 lg:col-span-5">
                    <h3 className="text-2xl font-semibold sm:text-4xl group-hover:underline group-focus:underline">What is a unit test? Why should we write unit tests?</h3>
                    <span className="text-xs ">November 27, 2022</span>
                    <img src="https://www.xenonstack.com/hubfs/xenonstack-unit-testing-best-practices.png" alt="" className="object-cover w-full h-64 rounded sm:h-96 lg:col-span-7 " />
                    <p>
                        A unit test is a way of testing a unit - the smallest piece of code that can be logically isolated in a system.
                        <br />
                        Doing Unit test is best practice while coding. It is so much more pleasant to work in a well tested code base. Less frictions, less stress, more communications.
                        <br />
                        <li>1. Better design</li>
                        <li>2. Write better code in the first place</li>
                        <li>3. Easier debugging</li>
                        <li>4. Up to Date Code Documentation</li>
                        <li>5. Measure Progress</li>
                        <li>6. Release with confidence</li>
                        <li>7. Save time and enjoy!</li>
                    </p>
                </article>
                {/* blog 4 */}
                <article className="p-6 space-y-2 lg:col-span-5">
                    <h3 className="text-2xl font-semibold sm:text-4xl group-hover:underline group-focus:underline">React vs. Angular vs. Vue?</h3>
                    <span className="text-xs ">November 27, 2022</span>
                    <img src="https://presence.agency/wp-content/uploads/2020/07/1_lC1kj3IeXoE8Z3OCKJoWkw.jpeg" alt="" className="object-cover w-full h-64 rounded sm:h-96 lg:col-span-7 " />
                    <p>
                        <span className='text-secondary-focus'>Angular vs React</span>
                        <br />
                        React often requires extra modules and components, which keeps the core library small, but means there’s extra work involved when incorporating outside tools. Angular, on the other hand, is more of a full-fledged solution that doesn’t require extras like React often does, though it does have a steeper learning curve for its core compared to React.
                        <br />
                        <span className='text-secondary-focus'>React vs Vue</span>
                        <br />
                        Vue is generally more suited to smaller, less complex apps and is easier to learn from scratch compared to React. Vue can be easier to integrate into new or existing projects and many feel its use of HTML templates along with JSX is an advantage.
                        <br />
                        <span className='text-secondary-focus'>Angular vs Vue</span>
                        <br />
                        A large library like Angular would require more diligence in keeping up with what’s new, while Vue would be less demanding in this regard and the fact that the two most recent major releases of Vue are in separate repositories helps.
                        <br />
                    </p>
                </article>
            </div>
        </section>
    );
};

export default Blogs;