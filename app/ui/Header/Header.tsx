'use client';

import { ChevronDown } from '@/app/ui/icons/ChevronDown';
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  NavbarMenu,
  NavbarMenuItem,
  NavbarMenuToggle,
} from '@nextui-org/navbar';
import { Button, Dropdown, DropdownItem, DropdownMenu, DropdownTrigger } from '@nextui-org/react';
import Link from 'next/link';
import React from 'react';
import { ThemeSwitcher } from '../ThemeSwitcher';
// import {  Button} from "@nextui-org/react";
// import {AcmeLogo} from "./AcmeLogo.jsx";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  const menuItems = ['About', 'Settings', 'Blog', 'Log Out'];

  return (
    <Navbar
      maxWidth="full"
      // shouldHideOnScroll
      isBordered
      isMenuOpen={isMenuOpen}
      onMenuOpenChange={setIsMenuOpen}
    >
      <NavbarContent className="md:hidden" justify="start">
        <NavbarMenuToggle
          aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
          srOnlyText="open main menu"
        />
      </NavbarContent>

      <NavbarContent className="pr-3 md:hidden" justify="center">
        <NavbarBrand>
          <p className="font-bold text-inherit">S.CANDELAS _</p>
        </NavbarBrand>
      </NavbarContent>

      <NavbarContent className="hidden w-full gap-4 md:flex" justify="center">
        <NavbarBrand>
          {/* <AcmeLogo /> */}
          <Link color="foreground" href="/">
            <p className="text-2xl font-bold text-inherit">S.CANDELAS _</p>
          </Link>
        </NavbarBrand>

        <Dropdown>
          <NavbarItem className="flex items-center">
            <Link href="/settings" aria-current="page">
              Settings
            </Link>
            <DropdownTrigger>
              <Button
                isIconOnly
                // disableRipple
                className="w-2 bg-transparent p-0 data-[hover=true]:bg-transparent"
                // endContent={<ChevronDown fill="currentColor" size={16} />}
                // radius="sm"
                variant="light"
              >
                <ChevronDown fill="currentColor" size={16} />
              </Button>
            </DropdownTrigger>
            {/* <Link color="foreground" href="/settings">
            Settings
          </Link> */}
          </NavbarItem>
          <DropdownMenu
            aria-label="ACME features"
            className="w-[140px]"
            itemClasses={{
              base: 'gap-4',
            }}
          >
            <DropdownItem
              key="projects"
              // description="projects"
              // startContent={}
            >
              <Link color="foreground" href="/settings/projects">
                Projects
              </Link>
            </DropdownItem>
            <DropdownItem
              key="tools"
              // description="tools"
              // startContent={}
            >
              <Link color="foreground" href="/settings/tools">
                Tools
              </Link>
            </DropdownItem>
          </DropdownMenu>
        </Dropdown>

        <NavbarItem
        // isActive
        >
          {/* <Link href="#" aria-current="page"> */}
          <Link
            href="/about"
            // aria-current="page"
          >
            About
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link color="foreground" href="#">
            Blog
          </Link>
        </NavbarItem>
      </NavbarContent>

      <NavbarContent justify="end" className="pl-12">
        <NavbarItem className="hidden lg:flex">
          <Link href="#">Login</Link>
        </NavbarItem>
        <NavbarItem>
          <Button as={Link} color="warning" href="#" variant="flat">
            Sign Up
          </Button>
        </NavbarItem>
        <NavbarItem>
          <ThemeSwitcher />
        </NavbarItem>
      </NavbarContent>

      <NavbarMenu>
        {menuItems.map((item, index) => (
          <NavbarMenuItem key={`${item}-${index}`}>
            <Link
              className="w-full"
              color={
                // index === 2 ? 'warning' : index === menuItems.length - 1 ? 'danger' : 'foreground'
                'foreground'
              }
              href="#"
            >
              {item}
            </Link>
          </NavbarMenuItem>
        ))}
      </NavbarMenu>
    </Navbar>
  );
}
