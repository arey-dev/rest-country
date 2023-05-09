import { Fragment } from "react";
import { Menu, Transition } from "@headlessui/react";
import { ChevronDownIcon } from "@heroicons/react/20/solid";
import { Link } from "react-router-dom";

const regions = [
  { id: "Africa", name: "Africa" },
  { id: "Americas", name: "America" },
  { id: "Asia", name: "Asia" },
  { id: "Europe", name: "Europe" },
  { id: "Oceania", name: "Oceania" },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export const Filter = () => {
  return (
    <Menu as="div" className="relative inline-block text-left">
      <div className="w-56">
        <Menu.Button className="inline-flex w-full justify-between rounded-md bg-light-element px-4 py-4 text-sm font-semibold text-light-text shadow-md ring-2 ring-inset ring-light-element hover:bg-light-background dark:bg-dark-element dark:text-dark-text dark:ring-dark-element dark:hover:bg-dark-background">
          <span className="transition duration-150 ease-in-out">
            Filter By Region
          </span>
          <ChevronDownIcon
            className="-mr-1 h-5 w-5 text-light-text dark:text-dark-text transition duration-150 ease-in-out"
            aria-hidden="true"
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
        <Menu.Items className="absolute left-0 z-10 mt-2 w-56 py-3.5 origin-top-left rounded-md bg-light-element shadow-md ring-1 ring-light-element ring-opacity-5 focus:outline-none dark:bg-dark-element dark:ring-dark-element">
          <div>
            {regions.map((region) => (
              <Menu.Item key={region.id}>
                {({ active }) => (
                  <Link
                    to={`?region=${region.id}`}
                    className={classNames(
                      active
                        ? "bg-light-background dark:bg-dark-background"
                        : "text-light-text",
                      "block px-4 py-1 text-sm font-semibold dark:text-dark-text "
                    )}
                  >
                    {region.name}
                  </Link>
                )}
              </Menu.Item>
            ))}
          </div>
        </Menu.Items>
      </Transition>
    </Menu>
  );
};
