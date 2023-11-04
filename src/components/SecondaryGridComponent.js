import React from "react"
import facebook from "../images/icon-facebook.svg"
import twitter from "../images/icon-twitter.svg"
import instagram from "../images/icon-instagram.svg"
import youtube from "../images/icon-youtube.svg"
import up from "../images/icon-up.svg"
import down from "../images/icon-down.svg"

export default function SecondaryGrid() {
  return (
    <>
      <h2 className="max-w-7xl mx-auto text-slate-600 dark:text-white font-bold mb-5 text-2xl md:text-3xl">
        Overview - Today
      </h2>
      <section className="max-w-7xl mx-auto grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
        <article className="bg-slate-200 dark:bg-slate-800 p-5 rounded shadow shadow-slate-50 dark:shadow-slate-700">
          <ul className="flex items-center justify-between mb-5">
            <li className="text-slate-600 font-bold dark:text-slate-400">
              Page Views
            </li>
            <li>
              <img src={facebook} alt="Facebook" />
            </li>
          </ul>

          <ul className="flex items-center justify-between">
            <li className="font-bold text-slate-800 text-3xl dark:text-white">
              87
            </li>
            <li className="flex items-center text-emerald-600 font-bold text-sm">
              <img src={up} alt="" className="w-3 mr-2" />
              3%
            </li>
          </ul>
        </article>

        <article className="bg-slate-200 p-5 rounded shadow shadow-slate-50 dark:bg-slate-800 dark:shadow-slate-700">
          <ul className="flex items-center justify-between mb-5">
            <li className="text-slate-600 font-bold dark:text-slate-400">
              Likes
            </li>
            <li>
              <img src={facebook} alt="Facebook" />
            </li>
          </ul>

          <ul className="flex items-center justify-between">
            <li className="font-bold text-slate-800 text-3xl dark:text-white">
              52
            </li>
            <li className="flex items-center text-rose-600 font-bold text-sm">
              <img src={down} alt="" className="w-3 mr-2" />
              2%
            </li>
          </ul>
        </article>

        <article className="bg-slate-200 p-5 rounded shadow shadow-slate-50 dark:bg-slate-800 dark:shadow-slate-700">
          <ul className="flex items-center justify-between mb-5">
            <li className="text-slate-600 font-bold dark:text-slate-400">
              Likes
            </li>
            <li>
              <img src={instagram} alt="Instagram" />
            </li>
          </ul>

          <ul className="flex items-center justify-between">
            <li className="font-bold text-slate-800 text-3xl dark:text-white">
              5462
            </li>
            <li className="flex items-center text-emerald-600 font-bold text-sm">
              <img src={up} alt="" className="w-3 mr-2" />
              2257%
            </li>
          </ul>
        </article>

        <article className="bg-slate-200 p-5 rounded shadow shadow-slate-50 dark:bg-slate-800 dark:shadow-slate-700">
          <ul className="flex items-center justify-between mb-5">
            <li className="text-slate-600 font-bold dark:text-slate-400">
              Profile Views
            </li>
            <li>
              <img src={instagram} alt="Instagram" />
            </li>
          </ul>

          <ul className="flex items-center justify-between">
            <li className="font-bold text-slate-800 text-3xl dark:text-white">
              52k
            </li>
            <li className="flex items-center text-emerald-600 font-bold text-sm">
              <img src={up} alt="" className="w-3 mr-2" />
              1375%
            </li>
          </ul>
        </article>

        <article className="bg-slate-200 p-5 rounded shadow shadow-slate-50 dark:bg-slate-800 dark:shadow-slate-700">
          <ul className="flex items-center justify-between mb-5">
            <li className="text-slate-600 font-bold dark:text-slate-400">
              Retweets
            </li>
            <li>
              <img src={twitter} alt="Twitter" />
            </li>
          </ul>

          <ul className="flex items-center justify-between">
            <li className="font-bold text-slate-800 text-3xl dark:text-white">
              117
            </li>
            <li className="flex items-center text-emerald-600 font-bold text-sm">
              <img src={up} alt="" className="w-3 mr-2" />
              303%
            </li>
          </ul>
        </article>

        <article className="bg-slate-200 p-5 rounded shadow shadow-slate-50 dark:bg-slate-800 dark:shadow-slate-700">
          <ul className="flex items-center justify-between mb-5">
            <li className="text-slate-600 font-bold dark:text-slate-400">
              Likes
            </li>
            <li>
              <img src={instagram} alt="Instagram" />
            </li>
          </ul>

          <ul className="flex items-center justify-between">
            <li className="font-bold text-slate-800 text-3xl dark:text-white">
              507
            </li>
            <li className="flex items-center text-emerald-600 font-bold text-sm">
              <img src={up} alt="" className="w-3 mr-2" />
              553%
            </li>
          </ul>
        </article>

        <article className="bg-slate-200 p-5 rounded shadow shadow-slate-50 dark:bg-slate-800 dark:shadow-slate-700">
          <ul className="flex items-center justify-between mb-5">
            <li className="text-slate-600 font-bold dark:text-slate-400">
              Likes
            </li>
            <li>
              <img src={youtube} alt="YouTube" />
            </li>
          </ul>

          <ul className="flex items-center justify-between">
            <li className="font-bold text-slate-800 text-3xl dark:text-white">
              107
            </li>
            <li className="flex items-center text-rose-600 font-bold text-sm">
              <img src={down} alt="" className="w-3 mr-2" />
              19%
            </li>
          </ul>
        </article>

        <article className="bg-slate-200 p-5 rounded shadow shadow-slate-50 dark:bg-slate-800 dark:shadow-slate-700">
          <ul className="flex items-center justify-between mb-5">
            <li className="text-slate-600 font-bold dark:text-slate-400">
              Total Views
            </li>
            <li>
              <img src={youtube} alt="YouTube" />
            </li>
          </ul>

          <ul className="flex items-center justify-between">
            <li className="font-bold text-slate-800 text-3xl dark:text-white">
              1407
            </li>
            <li className="flex items-center text-rose-600 font-bold text-sm">
              <img src={down} alt="" className="w-3 mr-2" />
              12%
            </li>
          </ul>
        </article>
      </section>
    </>
  )
}