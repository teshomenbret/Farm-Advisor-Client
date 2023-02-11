import { Fragment } from 'react'
import { Disclosure, Menu, Transition } from '@headlessui/react'
import { Bars3Icon, BellIcon, XMarkIcon } from '@heroicons/react/24/outline'
import three_dot from '../../asset/three_dot.svg'

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function Drop({choice}) {
  return (
                <Menu as="div" className="relative ml-3">
                  <div>
                    <Menu.Button className="">
                      <img
                        className="h-5 w-4 rounded-full"
                        src={three_dot}
                        alt=""
                      />
                    </Menu.Button>
                  </div>
                  <Transition
                    as={Fragment}
                    enter="transition ease-out duration-100"
                    enterFrom="transform opacity-0 scale-95"
                    enterTo="transform opacity-100 scale-100"
                    leave="transition ease-in duration-75"
                    leaveFrom="transform opacity-100 scale-100"
                    leaveTo="transform opacity-0 scale-95"
                  >
                    <Menu.Items className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                     {   choice&&choice.map((cho,index ) =>( 
                                          <Menu.Item key={index}>
                                            {({ active}) => (
                                              <p
                                                onClick={cho.onClick}
                                                className={classNames(active ? 'bg-gray-100' : '', 'block px-4 py-2 text-sm text-gray-700')}
                                              >
                                                {cho.name}
                                              </p>
                                            )}
                                          </Menu.Item>

                        ))
                    }

                    </Menu.Items>
                  </Transition>
                </Menu>
   
  )
}
